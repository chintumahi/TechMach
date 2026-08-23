const crypto = require('crypto');
const db = require('../models/db');
const emailService = require('./emailService');

const OTP_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes
const RESEND_COOLDOWN_MS = 45 * 1000; // 45 seconds
const MAX_ATTEMPTS = 5;
const HASH_SECRET = process.env.OTP_HASH_SECRET || 'techmach_otp_secret_salt_987654';

/**
 * Generate SHA-256 hash of (contact + otp + secret)
 */
function hashOtp(contact, otp) {
  const cleanContact = String(contact).trim().toLowerCase();
  return crypto.createHash('sha256').update(`${cleanContact}_${otp}_${HASH_SECRET}`).digest('hex');
}

/**
 * Generate & Send 6-Digit OTP to Email or Mobile
 */
async function generateAndSendOtp(contactInput, purpose) {
  const cleanContact = String(contactInput).trim().toLowerCase();

  if (!cleanContact) {
    return { success: false, status: 400, message: 'Please enter a valid Email Address or Mobile Number.' };
  }

  const verifications = db.getOtpVerifications();
  const now = Date.now();

  // 1. Check Resend Cooldown
  const latestRecord = verifications
    .filter(r => r.mobileNumber === cleanContact && r.purpose === purpose && !r.usedAt)
    .sort((a, b) => b.createdAt - a.createdAt)[0];

  if (latestRecord && (now - latestRecord.createdAt) < RESEND_COOLDOWN_MS) {
    const remainingSec = Math.ceil((RESEND_COOLDOWN_MS - (now - latestRecord.createdAt)) / 1000);
    return {
      success: false,
      status: 429,
      message: `Please wait ${remainingSec} seconds before requesting a new OTP.`,
      cooldownSeconds: remainingSec
    };
  }

  // 2. Invalidate all previous un-used OTPs for this contact & purpose
  verifications.forEach(r => {
    if (r.mobileNumber === cleanContact && r.purpose === purpose && !r.usedAt) {
      r.invalidated = true;
    }
  });

  // 3. Generate Cryptographically Secure 6-Digit OTP
  const rawOtp = String(crypto.randomInt(100000, 1000000));
  const otpHash = hashOtp(cleanContact, rawOtp);

  // 4. Record new OTP Verification Entry in DB
  const newRecord = {
    id: 'otp_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
    mobileNumber: cleanContact,
    otpHash: otpHash,
    purpose: purpose,
    createdAt: now,
    expiresAt: now + OTP_EXPIRY_MS,
    attempts: 0,
    usedAt: null,
    invalidated: false
  };

  verifications.push(newRecord);
  db.saveOtpVerifications(verifications);

  // 5. Send Transactional Email via Brevo API
  const emailResult = await emailService.sendEmailOtp({
    email: cleanContact,
    otp: rawOtp,
    purpose
  });

  if (!emailResult.success) {
    return {
      success: false,
      status: emailResult.status || 503,
      message: emailResult.message || 'Unable to send OTP right now. Please try again later.'
    };
  }

  const masked = emailService.maskEmailAddress(cleanContact);

  return {
    success: true,
    status: 200,
    message: `OTP sent to ${masked}`,
    maskedMobile: masked,
    maskedEmail: masked,
    cooldownSeconds: 45
  };
}

/**
 * Verify 6-Digit OTP against Email or Mobile
 */
function verifyOtp(contactInput, inputOtp, purpose) {
  const cleanContact = String(contactInput).trim().toLowerCase();
  const cleanOtp = String(inputOtp).trim();

  if (!cleanContact || cleanOtp.length !== 6) {
    return { success: false, status: 400, message: 'Invalid Email/Mobile or 6-digit OTP format.' };
  }

  const verifications = db.getOtpVerifications();
  const now = Date.now();

  // Find active, un-used, un-invalidated OTP record
  const record = verifications
    .filter(r => r.mobileNumber === cleanContact && r.purpose === purpose && !r.usedAt && !r.invalidated)
    .sort((a, b) => b.createdAt - a.createdAt)[0];

  if (!record) {
    return { success: false, status: 400, message: 'No active OTP request found for this contact. Please request a new OTP.' };
  }

  // 1. Check Attempt Limit
  if (record.attempts >= MAX_ATTEMPTS) {
    record.invalidated = true;
    db.saveOtpVerifications(verifications);
    return { success: false, status: 429, message: 'Maximum verification attempts exceeded. Please request a new OTP.' };
  }

  // 2. Check Expiry
  if (now > record.expiresAt) {
    record.invalidated = true;
    db.saveOtpVerifications(verifications);
    return { success: false, status: 410, message: 'OTP has expired. Please request a new OTP.' };
  }

  // 3. Compute Hash & Verify Contact + OTP Match
  const expectedHash = hashOtp(cleanContact, cleanOtp);

  if (expectedHash !== record.otpHash) {
    record.attempts += 1;
    db.saveOtpVerifications(verifications);
    const remainingAttempts = MAX_ATTEMPTS - record.attempts;
    return {
      success: false,
      status: 400,
      message: `Invalid OTP code. ${remainingAttempts} attempt${remainingAttempts !== 1 ? 's' : ''} remaining.`
    };
  }

  // 4. Successful Verification -> Mark Record Used
  record.usedAt = now;
  db.saveOtpVerifications(verifications);

  // Generate temporary password reset / auth token
  const resetToken = crypto.createHash('sha256').update(`${cleanContact}_${now}_${HASH_SECRET}`).digest('hex');

  return {
    success: true,
    status: 200,
    message: 'OTP verified successfully.',
    resetToken
  };
}

module.exports = {
  generateAndSendOtp,
  verifyOtp
};
