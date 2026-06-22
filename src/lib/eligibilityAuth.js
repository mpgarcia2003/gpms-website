// eligibilityAuth.js — single-password gate for the review dashboard.
// Set ELIGIBILITY_REVIEW_PASSWORD in the environment (a long random string).
// Generate one with: node -e "console.log(require('crypto').randomBytes(24).toString('base64url'))"
import crypto from "crypto";

export const REVIEW_COOKIE = "gp_review";

export function checkPassword(input) {
  const token = process.env.ELIGIBILITY_REVIEW_PASSWORD || "";
  if (!token || !input) return false;
  const a = Buffer.from(String(input));
  const b = Buffer.from(token);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}
