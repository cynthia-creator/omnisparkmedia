import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.formData();
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  // Configure SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.CONTACT_EMAIL,
    subject: "New Contact Form Message",
    text: message as string,
    html: `<p>${message}</p>`,
  });

  return NextResponse.redirect(new URL("/contact?success=true", req.url));
}
