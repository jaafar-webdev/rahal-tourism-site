"use server";

import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type LoginState = { error?: string };

export async function login(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const secret = new TextEncoder().encode(process.env.SESSION_SECRET);
    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("2h")
      .setIssuedAt()
      .sign(secret);

    (await cookies()).set("dashboard-auth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
      path: "/",
      sameSite: "lax",
    });

    redirect("/categories/view");
  }

  return { error: "Invalid credentials" };
}
