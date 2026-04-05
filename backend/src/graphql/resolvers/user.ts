import { GraphQLError } from "graphql";
import type { GraphQLContext } from "../context.js";

export const userResolvers = {
  Query: {
    me: async (_: unknown, __: unknown, ctx: GraphQLContext) => {
      if (!ctx.session) {
        throw new GraphQLError("Nao autenticado", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      const user = await ctx.prisma.user.findUnique({
        where: { id: ctx.session.session.userId },
      });

      if (!user) {
        throw new GraphQLError("Usuario nao encontrado", {
          extensions: { code: "NOT_FOUND" },
        });
      }

      return user;
    },

    users: async (_: unknown, __: unknown, ctx: GraphQLContext) => {
      if (!ctx.session) {
        throw new GraphQLError("Nao autenticado", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      return ctx.prisma.user.findMany({
        orderBy: { createdAt: "desc" },
      });
    },
  },
};
