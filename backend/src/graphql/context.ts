import type { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";
import type { Session } from "../auth/index.js";

export interface GraphQLContext {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  session: Session | null;
}
