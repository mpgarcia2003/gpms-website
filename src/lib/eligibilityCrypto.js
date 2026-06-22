// eligibilityCrypto.js — AES-256-GCM for the two sensitive eligibility fields
// (SSN, criminal-history details). Key lives ONLY in the environment variable
// GREENPOINT_ELIGIBILITY_ENC_KEY (32 bytes, base64). Never commit the key.
// Generate one with:  node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
import crypto from "crypto";

function getKey() {
  const raw = process.env.GREENPOINT_ELIGIBILITY_ENC_KEY;
  if (!raw) throw new Error("GREENPOINT_ELIGIBILITY_ENC_KEY is not set");
  const key = Buffer.from(raw, "base64");
  if (key.length !== 32) throw new Error("GREENPOINT_ELIGIBILITY_ENC_KEY must decode to 32 bytes");
  return key;
}

// Returns "iv:tag:ciphertext" (all base64), or null for empty input.
export function encrypt(plaintext) {
  if (plaintext == null || plaintext === "") return null;
  const key = getKey();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const enc = Buffer.concat([cipher.update(String(plaintext), "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return [iv.toString("base64"), tag.toString("base64"), enc.toString("base64")].join(":");
}

export function decrypt(payload) {
  if (!payload) return "";
  try {
    const key = getKey();
    const [ivB, tagB, dataB] = String(payload).split(":");
    const decipher = crypto.createDecipheriv("aes-256-gcm", key, Buffer.from(ivB, "base64"));
    decipher.setAuthTag(Buffer.from(tagB, "base64"));
    return Buffer.concat([decipher.update(Buffer.from(dataB, "base64")), decipher.final()]).toString("utf8");
  } catch {
    return "[decryption error]";
  }
}

export function formatSSN(ssn) {
  const d = String(ssn || "").replace(/\D/g, "");
  return d.length === 9 ? `${d.slice(0, 3)}-${d.slice(3, 5)}-${d.slice(5)}` : (ssn || "");
}
