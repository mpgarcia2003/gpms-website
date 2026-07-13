import { NextResponse } from "next/server";
import { checkPassword, REVIEW_COOKIE } from "../../../../lib/eligibilityAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const { password } = await req.json().catch(() => ({}));
  if (!checkPassword(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }
  const res = NextResponse.json({ success: true });
  res.cookies.set(REVIEW_COOKIE, process.env.ELIGIBILITY_REVIEW_PASSWORD, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}
