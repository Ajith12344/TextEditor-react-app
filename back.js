import crypto from "crypto";

// Node.js version check (example condition, adapt as needed)
const nodeVersion = process.version;
const useModernFunction = nodeVersion >= "v15.7.0" || nodeVersion >= "v14.18.0";

function hmac_rawurlsafe_base64_string(distinct_id, secret) {
  if (useModernFunction) {
    const hash = crypto
      .createHmac("sha256", secret)
      .update(distinct_id)
      .digest("base64url");
    return hash.trimEnd("=");
  } else {
    return crypto
      .createHmac("sha256", secret)
      .update(distinct_id)
      .digest("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }
}

// Example usage
const distinct_id = "Aji123";
const secret = "p2qiqvvH56a9DsO0IGRgRpHHbOdAeGf5qfZVpWzq9HE";
const hmacString = hmac_rawurlsafe_base64_string(distinct_id, secret);
console.log(hmacString);
