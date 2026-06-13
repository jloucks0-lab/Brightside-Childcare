import { NextResponse } from "next/server";
import { sendEmail, rowsToHtml } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    const data = await req.json();
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await sendEmail({
      subject: `Website inquiry: ${data.topic || "General"} — ${data.name}`,
      html: rowsToHtml("New website inquiry", {
        Name: data.name,
        Email: data.email,
        Phone: data.phone,
        Topic: data.topic,
        Message: data.message,
      }),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
