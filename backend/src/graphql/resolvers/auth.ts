import { GraphQLError } from "graphql";
import { auth } from "../../auth/index.js";
import { registerSchema, loginSchema } from "../../lib/validators.js";
import type { GraphQLContext } from "../context.js";

export const authResolvers = {
  Mutation: {
    register: async (
      _: unknown,
      args: { name: string; email: string; password: string },
      ctx: GraphQLContext
    ) => {
      const validation = registerSchema.safeParse(args);
      if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message, {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const response = await auth.api.signUpEmail({
        body: {
          name: args.name,
          email: args.email,
          password: args.password,
        },
      });

      return {
        user: response.user,
        token: response.token,
      };
    },

    login: async (
      _: unknown,
      args: { email: string; password: string },
      ctx: GraphQLContext
    ) => {
      const validation = loginSchema.safeParse(args);
      if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message, {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const response = await auth.api.signInEmail({
        body: {
          email: args.email,
          password: args.password,
        },
      });

      return {
        user: response.user,
        token: response.token,
      };
    },

    logout: async (_: unknown, __: unknown, ctx: GraphQLContext) => {
      if (!ctx.session) {
        throw new GraphQLError("Nao autenticado", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }

      await auth.api.signOut({
        headers: ctx.req.headers as Record<string, string>,
      });

      return true;
    },
  },
};
