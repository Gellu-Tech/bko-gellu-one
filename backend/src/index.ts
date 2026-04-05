import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth/index.js";
import { prisma } from "./lib/prisma.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers/index.js";
import { getSession } from "./middleware/auth.js";
import type { GraphQLContext } from "./graphql/context.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Better Auth - rotas REST em /api/auth/*
app.all("/api/auth/*splat", toNodeHandler(auth));

// Apollo Server - GraphQL
const server = new ApolloServer<GraphQLContext>({
  typeDefs,
  resolvers,
});

await server.start();

app.use(
  "/graphql",
  express.json(),
  expressMiddleware(server, {
    context: async ({ req, res }): Promise<GraphQLContext> => {
      const session = await getSession(req);
      return { prisma, req, res, session };
    },
  })
);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`GraphQL at http://localhost:${PORT}/graphql`);
  console.log(`Auth API at http://localhost:${PORT}/api/auth`);
});
