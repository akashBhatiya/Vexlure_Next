// Email Templates for Contact Form

export const getUserEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You - Vexlure</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
      color: white;
      padding: 40px 30px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }

    .content {
      padding: 35px 30px;
      font-size: 16px;
      line-height: 1.7;
    }

    .content p {
      margin-bottom: 16px;
    }

    .content strong {
      color: #222;
    }

    .summary-box {
      background: #f8f9fb;
      border-left: 4px solid #ff6b35;
      padding: 20px 25px;
      margin: 25px 0;
      border-radius: 6px;
    }

    .summary-item {
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      font-size: 15px;
    }

    .summary-label {
      font-weight: 600;
      color: #555;
      min-width: 100px;
      margin-right: 10px;
    }

    .summary-value {
      color: #333;
      flex: 1;
    }

    .summary-message {
      background: #fff;
      padding: 12px;
      border-radius: 5px;
      margin-top: 8px;
      line-height: 1.6;
      border: 1px solid #eee;
    }

    .button {
      display: inline-block;
      margin-top: 25px;
      background: #ff6b35;
      color: #fff;
      padding: 14px 36px;
      text-decoration: none;
      border-radius: 30px;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 0.5px;
      transition: background 0.3s ease, transform 0.2s ease;
    }

    .button:hover {
      background: #e35c2e;
      transform: translateY(-2px);
    }

    .footer {
      background: #f1f1f1;
      text-align: center;
      padding: 20px;
      font-size: 13px;
      color: #888;
    }

    @media only screen and (max-width: 600px) {
      .container {
        margin: 20px;
        border-radius: 0;
      }

      .content, .header {
        padding: 25px 20px;
      }

      .button {
        width: 100%;
        text-align: center;
        padding: 14px 0;
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>Thank You for Contacting Us</h1>
    </div>

    <!-- Content -->
    <div class="content">
      <p>Dear <strong>${data.name}</strong>,</p>

      <p>Thank you for reaching out to <strong>Vexlure International</strong>. We've successfully received your inquiry and our team is currently reviewing it.</p>

      <p>We typically respond within <strong>24–48 business hours</strong>. You'll hear from us soon!</p>

      <p><strong>Here's a quick summary of your submission:</strong></p>

      <!-- Summary Box -->
      <div class="summary-box">
        <div class="summary-item">
          <span class="summary-label">Name:</span>
          <span class="summary-value">${data.name}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Company:</span>
          <span class="summary-value">${data.company || 'Not provided'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Email:</span>
          <span class="summary-value">${data.email}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Phone:</span>
          <span class="summary-value">${data.mobile || 'Not provided'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Message:</span>
          <div class="summary-value summary-message">
            ${data.message}
          </div>
        </div>
      </div>

      <p>In the meantime, feel free to explore our website for more information about our offerings.</p>

      <a href="https://www.vexlureinternational.com/" class="button">Visit Vexlure</a>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>© 2024 Vexlure International. All rights reserved.</p>
    </div>
  </div>

</body>
</html>
`;

export const getAdminEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Submission</title>
  <style>
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background-color: #f1f3f5;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
      color: white;
      padding: 35px 30px 20px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }

    .header p {
      margin: 8px 0 0;
      font-size: 14px;
      color: #dcdcdc;
    }

    .badge {
      display: inline-block;
      background: #ff6b35;
      color: white;
      padding: 4px 10px;
      border-radius: 3px;
      font-size: 11px;
      margin-left: 8px;
      vertical-align: middle;
      font-weight: 600;
    }

    .content {
      padding: 30px;
    }

    .intro {
      font-size: 15px;
      color: #666;
      margin-bottom: 25px;
    }

    .info-row {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      font-size: 15px;
    }

    .info-label {
      font-weight: 600;
      width: 120px;
      color: #444;
    }

    .info-value {
      flex: 1;
      color: #333;
    }

    .info-value a {
      color: #1a73e8;
      text-decoration: none;
    }

    .message-box {
      background: #f9f9f9;
      padding: 20px;
      border-radius: 6px;
      margin-top: 25px;
      border: 1px solid #eee;
    }

    .message-box p {
      margin: 0;
      white-space: pre-wrap;
      color: #333;
      font-size: 15px;
      line-height: 1.6;
    }

    .message-box-title {
      font-weight: 600;
      margin-bottom: 12px;
      color: #555;
    }

    .timestamp {
      background: #fff4e5;
      border-left: 4px solid #ffcc00;
      padding: 12px 16px;
      margin-top: 25px;
      border-radius: 5px;
      font-size: 14px;
      color: #856404;
    }

    .footer {
      background: #f7f7f7;
      padding: 20px;
      text-align: center;
      font-size: 13px;
      color: #999;
    }

    @media only screen and (max-width: 600px) {
      .container {
        margin: 20px;
      }

      .content {
        padding: 20px;
      }

      .info-label {
        width: 100px;
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>Vexlure International</h1>
      <p>New Contact Form Submission <span class="badge">INBOX</span></p>
    </div>

    <!-- Content -->
    <div class="content">
      <p class="intro">
        A new inquiry has been submitted through the contact form. Here are the details:
      </p>

      <!-- Info Rows -->
      <div class="info-row">
        <div class="info-label">Name:</div>
        <div class="info-value">${data.name}</div>
      </div>

      <div class="info-row">
        <div class="info-label">Company:</div>
        <div class="info-value">${data.company || 'Not provided'}</div>
      </div>

      <div class="info-row">
        <div class="info-label">Email:</div>
        <div class="info-value">
          <a href="mailto:${data.email}">${data.email}</a>
        </div>
      </div>

      <div class="info-row">
        <div class="info-label">Phone:</div>
        <div class="info-value">${data.mobile || 'Not provided'}</div>
      </div>

      <!-- Message -->
      <div class="message-box">
        <div class="message-box-title">Message:</div>
        <p>${data.message}</p>
      </div>

      <!-- Timestamp -->
      <div class="timestamp">
        Submitted at: ${new Date().toLocaleString('en-US', {
          dateStyle: 'full',
          timeStyle: 'short'
        })}
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>© 2024 Vexlure International. All rights reserved.</p>
    </div>
  </div>

</body>
</html>
`;
