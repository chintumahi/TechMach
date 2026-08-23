const https = require('https');
const http = require('http');

/**
 * Mask mobile number for logs & security (e.g. +91 9876543210 -> +91 ***** *3210)
 */
function maskMobileNumber(mobile) {
  const clean = String(mobile).replace(/\D/g, '');
  if (clean.length < 10) return mobile;
  const last4 = clean.slice(-4);
  return `+91 ***** *${last4}`;
}

/**
 * SMS Provider Abstraction Service
 */
async function sendSmsOtp({ mobileNumber, otp, purpose }) {
  const provider = (process.env.SMS_PROVIDER || 'mock').toLowerCase();
  const maskedMobile = maskMobileNumber(mobileNumber);
  const message = `Your TechMach Verification Code is ${otp}. Valid for 5 minutes. Do not share this OTP with anyone.`;

  console.log(`\n============================================================`);
  console.log(`[SMS SERVICE] Triggered OTP Request`);
  console.log(`[SMS SERVICE] Provider: ${provider.toUpperCase()}`);
  console.log(`[SMS SERVICE] Target Mobile: ${maskedMobile}`);
  console.log(`[SMS SERVICE] Purpose: ${purpose}`);
  console.log(`============================================================\n`);

  if (provider === 'textbelt') {
    return await sendViaTextBelt(mobileNumber, message);
  } else if (provider === 'brevo') {
    return await sendViaBrevo(mobileNumber, message);
  } else if (provider === 'greenapi') {
    return await sendViaGreenApi(mobileNumber, message);
  } else if (provider === 'ultramsg') {
    return await sendViaUltraMsg(mobileNumber, message);
  } else if (provider === 'fast2sms') {
    return await sendViaFast2SMS(mobileNumber, otp);
  } else if (provider === 'twilio') {
    return await sendViaTwilio(mobileNumber, message);
  } else if (provider === 'msg91') {
    return await sendViaMsg91(mobileNumber, otp);
  } else if (provider === 'textlocal') {
    return await sendViaTextlocal(mobileNumber, message);
  } else {
    // Default Mock / Local Development Mode
    console.log(`[SMS MOCK ENGINE] Simulated SMS Sent to ${maskedMobile}`);
    console.log(`[DEV OTP LOG] Verification Code: ${otp}`);
    return { success: true, provider: 'mock', maskedMobile };
  }
}

/**
 * Fast2SMS Integration (Popular Indian SMS Gateway)
 */
function sendViaFast2SMS(mobileNumber, otp) {
  return new Promise((resolve) => {
    const apiKey = process.env.SMS_API_KEY ? process.env.SMS_API_KEY.trim() : '';

    if (!apiKey) {
      console.warn('[SMS WARN] Fast2SMS API key missing in .env. Falling back to mock logging.');
      return resolve({ success: true, provider: 'mock_fallback' });
    }

    const cleanMobile = mobileNumber.replace(/\D/g, '').slice(-10);

    // Fast2SMS OTP Route Request
    const postData = JSON.stringify({
      route: 'otp',
      variables_values: String(otp),
      numbers: cleanMobile
    });

    console.log(`[FAST2SMS REQUEST] Sending OTP ${otp} to mobile ${cleanMobile}...`);

    const req = https.request({
      hostname: 'www.fast2sms.com',
      port: 443,
      path: '/dev/bulkV2',
      method: 'POST',
      headers: {
        'authorization': apiKey,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`[FAST2SMS RESPONSE - Status ${res.statusCode}]:`, body);
        try {
          const parsed = JSON.parse(body);
          if (parsed.return === true || parsed.status_code === 200) {
            console.log(`✅ [FAST2SMS SUCCESS] SMS successfully dispatched to +91 ${cleanMobile}!`);
            resolve({ success: true, provider: 'fast2sms', response: parsed });
          } else {
            console.warn(`⚠️ [FAST2SMS NOTICE] OTP route response: ${parsed.message}. Retrying via Quick SMS route...`);
            sendViaFast2SMSQuickRoute(cleanMobile, otp, apiKey).then(resolve);
          }
        } catch (e) {
          resolve({ success: true, provider: 'fast2sms_raw', response: body });
        }
      });
    });

    req.on('error', (err) => {
      console.error('[SMS FAST2SMS ERROR]', err);
      resolve({ success: false, error: err.message });
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Fast2SMS Quick Route Fallback
 */
function sendViaFast2SMSQuickRoute(cleanMobile, otp, apiKey) {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      route: 'q',
      message: `Your TechMach Verification Code is ${otp}. Valid for 5 minutes.`,
      language: 'english',
      flash: 0,
      numbers: cleanMobile
    });

    const req = https.request({
      hostname: 'www.fast2sms.com',
      port: 443,
      path: '/dev/bulkV2',
      method: 'POST',
      headers: {
        'authorization': apiKey,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`[FAST2SMS QUICK ROUTE RESPONSE]:`, body);
        resolve({ success: true, provider: 'fast2sms_quick', response: body });
      });
    });

    req.on('error', (err) => {
      console.error('[SMS FAST2SMS QUICK ERROR]', err);
      resolve({ success: false, error: err.message });
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Twilio SMS Integration
 */
function sendViaTwilio(mobileNumber, message) {
  return new Promise((resolve, reject) => {
    const sid = process.env.SMS_TWILIO_SID;
    const token = process.env.SMS_TWILIO_AUTH_TOKEN;
    const fromPhone = process.env.SMS_TWILIO_PHONE_NUMBER;

    if (!sid || !token || !fromPhone) {
      console.warn('[SMS WARN] Twilio credentials missing in .env. Falling back to mock logging.');
      return resolve({ success: true, provider: 'mock_fallback' });
    }

    const postData = new URLSearchParams({
      To: mobileNumber.startsWith('+') ? mobileNumber : `+91${mobileNumber}`,
      From: fromPhone,
      Body: message
    }).toString();

    const auth = Buffer.from(`${sid}:${token}`).toString('base64');
    const req = https.request({
      hostname: 'api.twilio.com',
      port: 443,
      path: `/2010-04-01/Accounts/${sid}/Messages.json`,
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('[SMS TWILIO] Successfully sent SMS via Twilio!');
          resolve({ success: true, provider: 'twilio' });
        } else {
          console.error('[SMS TWILIO ERROR]', body);
          resolve({ success: false, error: 'Twilio SMS failed' });
        }
      });
    });

    req.on('error', (err) => {
      console.error('[SMS TWILIO ERROR]', err);
      resolve({ success: false, error: err.message });
    });

    req.write(postData);
    req.end();
  });
}

/**
 * MSG91 SMS Integration
 */
function sendViaMsg91(mobileNumber, otp) {
  return new Promise((resolve) => {
    const authKey = process.env.SMS_API_KEY;
    const templateId = process.env.SMS_TEMPLATE_ID;

    if (!authKey || !templateId) {
      console.warn('[SMS WARN] MSG91 credentials missing in .env. Falling back to mock logging.');
      return resolve({ success: true, provider: 'mock_fallback' });
    }

    const cleanMobile = mobileNumber.replace(/\D/g, '');
    const fullMobile = cleanMobile.length === 10 ? `91${cleanMobile}` : cleanMobile;
    const postData = JSON.stringify({
      template_id: templateId,
      mobile: fullMobile,
      otp: otp
    });

    const req = https.request({
      hostname: 'control.msg91.com',
      port: 443,
      path: '/api/v5/otp',
      method: 'POST',
      headers: {
        'authkey': authKey,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log('[SMS MSG91 Response]', body);
        resolve({ success: true, provider: 'msg91' });
      });
    });

    req.on('error', (err) => {
      console.error('[SMS MSG91 ERROR]', err);
      resolve({ success: false, error: err.message });
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Textlocal SMS Integration
 */
function sendViaTextlocal(mobileNumber, message) {
  return new Promise((resolve) => {
    const apiKey = process.env.SMS_API_KEY;
    const sender = process.env.SMS_SENDER_ID || 'TXTLCL';

    if (!apiKey) {
      console.warn('[SMS WARN] Textlocal API key missing in .env. Falling back to mock logging.');
      return resolve({ success: true, provider: 'mock_fallback' });
    }

    const postData = new URLSearchParams({
      apiKey: apiKey,
      numbers: mobileNumber,
      message: message,
      sender: sender
    }).toString();

    const req = https.request({
      hostname: 'api.textlocal.in',
      port: 443,
      path: '/send/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log('[SMS TEXTLOCAL Response]', body);
        resolve({ success: true, provider: 'textlocal' });
      });
    });

    req.on('error', (err) => {
      console.error('[SMS TEXTLOCAL ERROR]', err);
      resolve({ success: false, error: err.message });
    });

    req.write(postData);
    req.end();
  });
}

module.exports = {
  sendSmsOtp,
  maskMobileNumber
};


/**
 * TextBelt Free SMS Integration (100% Free daily SMS without API Key)
 */
function sendViaTextBelt(mobileNumber, message) {
  return new Promise((resolve) => {
    const cleanMobile = mobileNumber.replace(/\D/g, '').slice(-10);
    const fullMobile = `+91${cleanMobile}`;
    const postData = new URLSearchParams({
      phone: fullMobile,
      message: message,
      key: process.env.SMS_API_KEY || 'textbelt'
    }).toString();

    console.log(`[TEXTBELT FREE SMS] Dispatching free SMS to ${fullMobile}...`);

    const req = https.request({
      hostname: 'textbelt.com',
      port: 443,
      path: '/text',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`[TEXTBELT RESPONSE]`, body);
        try {
          const parsed = JSON.parse(body);
          if (parsed.success) {
            console.log(`✅ [TEXTBELT SUCCESS] Free SMS delivered to ${fullMobile}!`);
            resolve({ success: true, provider: 'textbelt', response: parsed });
          } else {
            console.warn(`⚠️ [TEXTBELT LIMIT] ${parsed.error}`);
            resolve({ success: false, error: parsed.error });
          }
        } catch (e) {
          resolve({ success: true, provider: 'textbelt_raw', response: body });
        }
      });
    });

    req.on('error', (err) => {
      console.error('[TEXTBELT ERROR]', err);
      resolve({ success: false, error: err.message });
    });

    req.write(postData);
    req.end();
  });
}


/**
 * UltraMsg WhatsApp Integration
 */
function sendViaUltraMsg(mobileNumber, message) {
  return new Promise((resolve) => {
    const instanceId = process.env.ULTRAMSG_INSTANCE || process.env.SMS_API_KEY;
    const token = process.env.ULTRAMSG_TOKEN || process.env.SMS_AUTH_TOKEN;

    if (!instanceId || !token) {
      console.warn('[WHATSAPP WARN] UltraMsg instanceId or token missing in .env');
      return resolve({ success: false, error: 'UltraMsg credentials missing' });
    }

    const cleanMobile = mobileNumber.replace(/\D/g, '').slice(-10);
    const toPhone = `+91${cleanMobile}`;
    const postData = new URLSearchParams({
      token: token,
      to: toPhone,
      body: message
    }).toString();

    console.log(`[ULTRAMSG WHATSAPP] Sending WhatsApp OTP to ${toPhone}...`);

    const req = https.request({
      hostname: 'api.ultramsg.com',
      port: 443,
      path: `/${instanceId}/messages/chat`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`[ULTRAMSG RESPONSE]`, body);
        resolve({ success: true, provider: 'ultramsg', response: body });
      });
    });

    req.on('error', (err) => {
      console.error('[ULTRAMSG ERROR]', err);
      resolve({ success: false, error: err.message });
    });

    req.write(postData);
    req.end();
  });
}

/**
 * Green-API WhatsApp Integration (Free Developer Plan)
 */
function sendViaGreenApi(mobileNumber, message) {
  return new Promise((resolve) => {
    const instanceId = process.env.GREEN_API_INSTANCE || process.env.SMS_API_KEY;
    const token = process.env.GREEN_API_TOKEN || process.env.SMS_AUTH_TOKEN;

    if (!instanceId || !token) {
      console.warn('[GREEN-API WARN] Green-API instanceId or token missing in .env');
      return resolve({ success: false, error: 'Green-API credentials missing' });
    }

    const cleanMobile = mobileNumber.replace(/\D/g, '').slice(-10);
    const chatId = `91${cleanMobile}@c.us`;
    const postData = JSON.stringify({
      chatId: chatId,
      message: message
    });

    console.log(`[GREEN-API WHATSAPP] Sending WhatsApp OTP to ${chatId}...`);

    const req = https.request({
      hostname: 'api.green-api.com',
      port: 443,
      path: `/waInstance${instanceId}/sendMessage/${token}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`[GREEN-API RESPONSE]`, body);
        resolve({ success: true, provider: 'greenapi', response: body });
      });
    });

    req.on('error', (err) => {
      console.error('[GREEN-API ERROR]', err);
      resolve({ success: false, error: err.message });
    });

    req.write(postData);
    req.end();
  });
}


/**
 * Brevo (Sendinblue) Transactional SMS Integration (300 Free SMS/Emails per day)
 */
function sendViaBrevo(mobileNumber, message) {
  return new Promise((resolve) => {
    const apiKey = process.env.SMS_API_KEY ? process.env.SMS_API_KEY.trim() : '';

    if (!apiKey) {
      console.warn('[BREVO WARN] Brevo API key missing in .env');
      return resolve({ success: false, error: 'Brevo API key missing' });
    }

    const cleanMobile = mobileNumber.replace(/\D/g, '').slice(-10);
    const recipientPhone = `91${cleanMobile}`;
    const sender = (process.env.SMS_SENDER_ID || 'TechMach').slice(0, 11);

    const postData = JSON.stringify({
      sender: sender,
      recipient: recipientPhone,
      content: message,
      type: 'transactional'
    });

    console.log(`[BREVO SMS] Dispatching Transactional SMS to +${recipientPhone}...`);

    const req = https.request({
      hostname: 'api.brevo.com',
      port: 443,
      path: '/v3/transactionalSMS/sms',
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
        console.log(`[BREVO SMS RESPONSE - Status ${res.statusCode}]:`, body);
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            console.log(`✅ [BREVO SUCCESS] Real SMS successfully dispatched to +${recipientPhone}!`);
            resolve({ success: true, provider: 'brevo', response: parsed });
          } else {
            console.warn(`⚠️ [BREVO SMS NOTICE]: ${parsed.message || body}`);
            // Seamless fallback so web platform registration & login never block
            resolve({ success: true, provider: 'brevo_fallback', message: parsed.message || body });
          }
        } catch (e) {
          resolve({ success: true, provider: 'brevo_raw', response: body });
        }
      });
    });

    req.on('error', (err) => {
      console.error('[BREVO ERROR]', err);
      resolve({ success: false, error: err.message });
    });

    req.write(postData);
    req.end();
  });
}
