import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('position');
    const cvFile = formData.get('cv');

    if (!name || !email || !phone || !position || !cvFile || !(cvFile instanceof File)) {
      return NextResponse.json({ error: 'All fields are required and CV must be a file.' }, { status: 400 });
    }

    // Configure nodemailer (use your SMTP credentials or a service like Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_SALES_EMAIL_USER, // set in .env
        pass: process.env.CONTACT_SALES_EMAIL_PASS, // set in .env
      },
    });

    // Prepare attachment
    const fileBuffer = Buffer.from(await cvFile.arrayBuffer());

    await transporter.sendMail({
      from: process.env.CONTACT_SALES_EMAIL_USER,
      to: 'anshuranjan.ranjan@gmail.com',
      subject: `New Career Application: ${position}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Position:</b> ${position}</p>`,
      attachments: [
        {
          filename: cvFile.name,
          content: fileBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Career application error:', error);
    return NextResponse.json({ error: 'Failed to send application.' }, { status: 500 });
  }
} 