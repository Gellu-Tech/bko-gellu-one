import { fromNodeHeaders } from "better-auth/node";
import { auth, type Session } from "../auth/index.js";
import type { Request } from "express";

export async function getSession(req: Request): Promise<Session | null> {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  return session;
}
