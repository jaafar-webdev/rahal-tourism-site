// src/features/dashboard/auth/lib/auth-utils.ts
"use server";

import { jwtVerify, JWTVerifyResult } from "jose";
import { cookies } from "next/headers";

const SECRET = new TextEncoder().encode(process.env.SESSION_SECRET);

export interface AuthPayload {
  username: string;
  iat: number;
  exp: number;
}

export async function verifyAuthToken(): Promise<AuthPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("dashboard-auth")?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify<AuthPayload>(token, SECRET);

    if (typeof payload.username !== "string" || !payload.username) {
      return null;
    }

    return payload;
  } catch (error) {
    return null;
  }
}

export async function requireAuth() {
  const payload = await verifyAuthToken();
  if (!payload) {
    const { redirect } = await import("next/navigation");
    redirect("/admin-login");
  }
  return payload;
}
