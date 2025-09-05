import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_S4aKfjTi_PruAV2H3Gs5Lx4JJgDxszbXi");
const FROM = "MERC & CO <no-reply@mercandco.com>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const html = `
      <div>
        <h2>New contact submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line">${message}</p>
      </div>
    `;

    const to = [
      "matt@mercandco.com",
      "ross@mercandco.com",
      "andrew@mercandco.com",
    ];

    await resend.emails.send({
      from: FROM,
      to,
      subject: `Website contact from ${name}`,
      reply_to: email,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}


