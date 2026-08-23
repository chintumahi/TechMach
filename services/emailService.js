const https = require('https');

/**
 * Mask email address for UI & security (e.g. priyranjan@gmail.com -> p***n@gmail.com)
 */
function maskEmailAddress(email) {
  if (!email || !email.includes('@')) return email;
  const parts = email.split('@');
  const name = parts[0];
  const domain = parts[1];

  if (name.length <= 2) {
    return `${name[0]}*@${domain}`;
  }
  const first = name[0];
  const last = name[name.length - 1];
  return `${first}${'*'.repeat(Math.min(name.length - 2, 4))}${last}@${domain}`;
}

/**
 * Send 6-Digit Verification OTP via Brevo Transactional Email API
 * Production Hardened: No OTP console logging, no fake fallbacks on error.
 */
function sendEmailOtp({ email, otp, purpose }) {
  return new Promise((resolve) => {
    const apiKey = process.env.BREVO_API_KEY ? process.env.BREVO_API_KEY.trim() : '';
    const senderEmail = process.env.BREVO_SENDER_EMAIL ? process.env.BREVO_SENDER_EMAIL.trim() : 'priyranjankumar7890@gmail.com';
    const maskedEmail = maskEmailAddress(email);

    if (!apiKey) {
      console.warn('[EMAIL ERROR] BREVO_API_KEY missing in .env. Email delivery failed.');
      return resolve({
        success: false,
        status: 503,
        message: 'Unable to send OTP right now. Please try again later.'
      });
    }

    const purposeTitle = purpose === 'register' ? 'Account Registration' : purpose === 'forgot_password' ? 'Password Reset' : 'Login Verification';

    const htmlContent = `
      <div style="font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:540px;margin:0 auto;padding:24px;border-radius:16px;background:#FAFAFE;border:1px solid #E2E8F0;">
        <div style="text-align:center;margin-bottom:20px;">
          <div style="display:inline-block;background:linear-gradient(135deg, #3F3BE0, #7C3AED);color:#FFF;font-weight:900;font-size:22px;padding:10px 18px;border-radius:12px;letter-spacing:1px;">
            TM TechMach
          </div>
          <p style="font-size:13px;color:#64748B;margin-top:6px;font-weight:600;">MOCK TEST PLATFORM</p>
        </div>

        <div style="background:#FFFFFF;padding:24px;border-radius:14px;box-shadow:0 4px 14px rgba(63,59,224,0.06);border:1px solid #EDF2F7;">
          <h2 style="font-size:18px;color:#1E293B;margin-top:0;margin-bottom:10px;">${purposeTitle} OTP</h2>
          <p style="font-size:14px;color:#475569;line-height:1.5;margin-bottom:20px;">
            Please use the following 6-digit verification code to complete your ${purposeTitle.toLowerCase()} on TechMach Mock Test:
          </p>

          <div style="text-align:center;margin:24px 0;">
            <div style="display:inline-block;background:linear-gradient(135deg, #EFF6FF, #F3E8FF);border:2px dashed #7C3AED;color:#3F3BE0;font-size:32px;font-weight:900;letter-spacing:8px;padding:14px 28px;border-radius:12px;font-family:monospace;">
              ${otp}
            </div>
          </div>

          <p style="font-size:13px;color:#64748B;text-align:center;margin-bottom:0;">
            ⏳ This OTP is valid for <strong>5 minutes</strong>. Do not share this code with anyone.
          </p>
        </div>

        <div style="text-align:center;margin-top:20px;font-size:12px;color:#94A3B8;">
          &copy; 2026 TechMach Mock Test Platform. All rights reserved.
        </div>
      </div>
    `;

    const postData = JSON.stringify({
      sender: { name: "TechMach Platform", email: senderEmail },
      to: [{ email: email }],
      subject: `[TechMach] Your Verification Code is ${otp}`,
      htmlContent: htmlContent
    });

    const req = https.request({
      hostname: 'api.brevo.com',
      port: 443,
      path: '/v3/smtp/email',
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`✅ [EMAIL SUCCESS] Verification email delivered via Brevo to ${maskedEmail}`);
          resolve({ success: true, provider: 'brevo_email', maskedEmail });
        } else {
          console.error(`❌ [BREVO API ERROR - Status ${res.statusCode}]`);
          resolve({
            success: false,
            status: 503,
            message: 'Unable to send OTP right now. Please try again later.'
          });
        }
      });
    });

    req.on('error', (err) => {
      console.error('[EMAIL HTTPS REQUEST ERROR]', err.message);
      resolve({
        success: false,
        status: 503,
        message: 'Unable to send OTP right now. Please try again later.'
      });
    });

    req.write(postData);
    req.end();
  });
}

module.exports = {
  sendEmailOtp,
  maskEmailAddress
};
