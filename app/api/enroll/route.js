import { NextResponse } from "next/server";
import { sendEmail, rowsToHtml } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    const data = await req.json();
    if (!data.childName || !data.parentName || !data.email || !data.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await sendEmail({
      subject: `Enrollment inquiry: ${data.childName} (${data.program || "program TBD"})`,
      html: rowsToHtml("New enrollment inquiry", {
        "Child's name": data.childName,
        "Date of birth": data.childDob,
        Program: data.program,
        "Desired start": data.startDate,
        "Preferred location": data.location,
        Schedule: data.schedule,
        "Parent/guardian": data.parentName,
        Email: data.email,
        Phone: data.phone,
        Notes: data.notes,
      }),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("enroll form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
