import { Resend } from "resend";

const TO = process.env.NOTIFY_EMAIL || "brightsidechildcare22@yahoo.com";
// Use a verified domain sender in production, e.g. forms@brightsidechildcare.com
const FROM = process.env.FROM_EMAIL || "Brightside Website <onboarding@resend.dev>";

export async function sendEmail({ subject, html }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // No email provider configured yet — log the submission so nothing is lost in dev.
    console.log("[form submission — RESEND_API_KEY not set]", { subject, html });
    return { ok: true, delivered: false };
  }
  const resend = new Resend(key);
  const { error } = await resend.emails.send({ from: FROM, to: TO, subject, html });
  if (error) throw new Error(error.message);
  return { ok: true, delivered: true };
}

export function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function rowsToHtml(title, fields) {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 12px">${escapeHtml(v)}</td></tr>`
    )
    .join("");
  return `<h2>${escapeHtml(title)}</h2><table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>`;
}
