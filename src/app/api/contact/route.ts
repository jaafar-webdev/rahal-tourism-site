import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log("API Contact form submission:", body);

  return NextResponse.json(
    { message: "Contact form submitted successfully!" },
    { status: 200 }
  );
}
