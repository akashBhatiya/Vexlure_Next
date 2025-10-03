import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getUserEmailTemplate, getAdminEmailTemplate } from '@/lib/email-templates';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, mobile, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter - auto-detect Gmail or Hostinger
    const isGmail = process.env.SMTP_HOST?.includes('gmail');
    
    const transporter = isGmail 
      ? nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS, // Use App Password for Gmail
          }
        })
      : nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.hostinger.com',
          port: parseInt(process.env.SMTP_PORT || '465'),
          secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER || 'info@vexlureinternational.com',
            pass: process.env.SMTP_PASS, // Email password
          },
        });

    // Send email to user
    const userMailOptions = {
      from: {
        name: 'Vexlure International',
        address: process.env.SMTP_USER || 'info@vexlureinternational.com'
      },
      to: email,
      subject: 'Thank You for Contacting Vexlure International',
      html: getUserEmailTemplate({ name, company, email, mobile, message }),
    };

    // Send email to admin
    const adminMailOptions = {
      from: {
        name: 'Contact Form',
        address: process.env.SMTP_USER || 'info@vexlureinternational.com'
      },
      to: 'info@vexlureinternational.com',
      subject: `New Contact Form Submission - ${name}`,
      html: getAdminEmailTemplate({ name, company, email, mobile, message }),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for contacting us! We will get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
