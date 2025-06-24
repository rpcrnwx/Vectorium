import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, mobile, question } = await request.json();
    if (!name || !email || !mobile || !question) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Configure nodemailer (use your SMTP credentials or a service like Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_SALES_EMAIL_USER, // set in .env
        pass: process.env.CONTACT_SALES_EMAIL_PASS, // set in .env
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_SALES_EMAIL_USER,
      to: 'anshuranjan.ranjan@gmail.com',
      subject: 'New Contact Sales Inquiry',
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nQuestion: ${question}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Mobile:</b> ${mobile}</p><p><b>Question:</b> ${question}</p>`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact sales error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
} 