import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Admin email - replace with actual admin email
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@vexlureinternational.com';

// Create email transporter - auto-detect Gmail or Hostinger
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
        pass: process.env.SMTP_PASS, // Your Hostinger email password
      },
    });

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare email options
    const adminMailOptions = {
      from: {
        name: 'Newsletter Subscription',
        address: process.env.SMTP_USER || 'info@vexlureinternational.com'
      },
      to: ADMIN_EMAIL,
      subject: 'New Newsletter Subscription - Vexlure International',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #FD601A 0%, #ff8c4a 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Newsletter Subscription!</h1>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              A new user has subscribed to your newsletter:
            </p>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FD601A;">
              <p style="margin: 0; color: #555; font-size: 14px;">Subscriber Email:</p>
              <p style="margin: 5px 0 0 0; color: #333; font-size: 18px; font-weight: bold;">${email}</p>
            </div>
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              This user subscribed to your newsletter through the Vexlure International website.
            </p>
            <p style="color: #666; font-size: 14px;">
              Date: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
          <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
            <p>© 2024 Vexlure International. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    const subscriberMailOptions = {
      from: {
        name: 'Vexlure International',
        address: process.env.SMTP_USER || 'info@vexlureinternational.com'
      },
      to: email,
      subject: 'Welcome to Vexlure International Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #FD601A 0%, #ff8c4a 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 32px;">Thank You for Subscribing!</h1>
          </div>
          <div style="background: #ffffff; padding: 40px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="color: #333; font-size: 16px; line-height: 1.8;">
              Welcome to the Vexlure International newsletter family!
            </p>
            <p style="color: #555; font-size: 15px; line-height: 1.8;">
              You'll now receive the latest insights and strategies to stay ahead in global trade, 
              including updates on agricultural products, spices, market trends, and exclusive industry news.
            </p>
            <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h3 style="color: #FD601A; margin: 0 0 10px 0;">What to expect:</h3>
              <ul style="color: #666; font-size: 14px; line-height: 1.8; margin: 10px 0; padding-left: 20px;">
                <li>Export insights and market analysis</li>
                <li>Product updates and quality certifications</li>
                <li>Industry trends and opportunities</li>
                <li>Exclusive offers and announcements</li>
              </ul>
            </div>
            <p style="color: #666; font-size: 14px; line-height: 1.6;">
              Stay connected with us for valuable content delivered straight to your inbox.
            </p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://www.vexlureinternational.com/" style="display: inline-block; background: #FD601A; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">Visit Our Website</a>
            </div>
          </div>
          <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
            <p>© 2024 Vexlure International. All rights reserved.</p>
            <p>Surat, India | Munich, Germany</p>
          </div>
        </div>
      `,
    };

    // Send emails in background (fire and forget approach for faster response)
    // Using Promise.allSettled to send both emails in parallel
    Promise.allSettled([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(subscriberMailOptions)
    ]).then(results => {
      results.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.error(`Error sending email ${index === 0 ? 'to admin' : 'to subscriber'}:`, result.reason);
        }
      });
    }).catch(error => {
      console.error('Error in email sending process:', error);
    });

    // Return success immediately without waiting for emails
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for subscribing to our newsletter!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
