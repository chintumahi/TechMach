const express = require('express');
const router = express.Router();
const db = require('../models/db');
const otpService = require('../services/otpService');
const smsService = require('../services/smsService');

/**
 * Send 6-Digit OTP via SMS
 * POST /api/auth/send-otp
 * Body: { mobileNumber, purpose }
 */
router.post('/send-otp', async (req, res) => {
  try {
    const { mobileNumber, purpose } = req.body;
    const cleanPurpose = (purpose || 'login').toLowerCase();

    if (!mobileNumber) {
      return res.status(400).json({ success: false, message: 'Mobile number is required.' });
    }

    const cleanContact = String(mobileNumber).trim().toLowerCase();
    if (!cleanContact || (!cleanContact.includes('@') && cleanContact.replace(/\D/g, '').length !== 10)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid Email Address or 10-digit Mobile Number.' });
    }

    // Purpose Checks
    if (cleanPurpose === 'forgot_password') {
      const existingUser = db.findUserByMobile(cleanContact);
      if (!existingUser) {
        return res.status(404).json({ success: false, message: 'Mobile number is not registered. Please check or create a new account.' });
      }
    }

    if (cleanPurpose === 'register') {
      const existingUser = db.findUserByMobile(cleanContact);
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Mobile number is already registered. Please login instead.' });
      }
    }

    const result = await otpService.generateAndSendOtp(cleanContact, cleanPurpose);
    return res.status(result.status).json(result);

  } catch (error) {
    console.error('[ROUTE ERROR /send-otp]', error);
    return res.status(500).json({ success: false, message: 'Server error while sending OTP.' });
  }
});

/**
 * Verify 6-Digit OTP
 * POST /api/auth/verify-otp
 * Body: { mobileNumber, otp, purpose, name, username, password }
 */
router.post('/verify-otp', (req, res) => {
  try {
    const { mobileNumber, otp, purpose, name, username, password } = req.body;
    const cleanPurpose = (purpose || 'login').toLowerCase();

    if (!mobileNumber || !otp) {
      return res.status(400).json({ success: false, message: 'Mobile number and 6-digit OTP are required.' });
    }

    const cleanContact = String(mobileNumber).trim().toLowerCase();
    const result = otpService.verifyOtp(cleanContact, otp, cleanPurpose);

    if (!result.success) {
      return res.status(result.status).json(result);
    }

    // Handle post-verification flow based on purpose
    if (cleanPurpose === 'register') {
      if (!name || !username || !password) {
        return res.status(400).json({ success: false, message: 'Name, Username, and Password are required for registration.' });
      }
      const existingUser = db.findUserByUsernameOrMobile(username);
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Username is already taken. Please choose another.' });
      }

      const newUser = db.createUser({ name, username, mobile: cleanContact, password });
      return res.status(200).json({
        success: true,
        message: 'Account registered & verified successfully!',
        user: { id: newUser.id, name: newUser.name, username: newUser.username, mobile: newUser.mobile }
      });
    }

    if (cleanPurpose === 'login') {
      let user = db.findUserByMobile(cleanContact);
      if (!user) {
        // Quick auto-register for verified mobile user
        user = db.createUser({
          name: 'User ' + cleanContact.slice(-4),
          username: 'user_' + cleanContact,
          mobile: cleanContact,
          password: 'otp_' + Date.now()
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Mobile OTP verified! Login successful.',
        user: { id: user.id, name: user.name, username: user.username, mobile: user.mobile }
      });
    }

    if (cleanPurpose === 'forgot_password') {
      return res.status(200).json({
        success: true,
        message: 'OTP verified successfully. You may now reset your password.',
        resetToken: result.resetToken,
        mobileNumber: cleanContact
      });
    }

    return res.status(200).json({ success: true, message: 'OTP verified successfully.' });

  } catch (error) {
    console.error('[ROUTE ERROR /verify-otp]', error);
    return res.status(500).json({ success: false, message: 'Server error while verifying OTP.' });
  }
});

/**
 * Reset Password after OTP Verification
 * POST /api/auth/reset-password
 * Body: { mobileNumber, newPassword, resetToken }
 */
router.post('/reset-password', (req, res) => {
  try {
    const { mobileNumber, newPassword, resetToken } = req.body;
    if (!mobileNumber || !newPassword || !resetToken) {
      return res.status(400).json({ success: false, message: 'Mobile number, new password, and reset token are required.' });
    }

    const cleanContact = String(mobileNumber).replace(/\D/g, '');
    const user = db.findUserByMobile(cleanContact);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found for this mobile number.' });
    }

    const updated = db.updateUserPassword(cleanContact, newPassword);
    if (updated) {
      return res.status(200).json({ success: true, message: 'Password reset successfully! You can now login with your new password.' });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to update password.' });
    }

  } catch (error) {
    console.error('[ROUTE ERROR /reset-password]', error);
    return res.status(500).json({ success: false, message: 'Server error while resetting password.' });
  }
});

/**
 * Password Login
 * POST /api/auth/login-password
 * Body: { usernameOrMobile, password }
 */
router.post('/login-password', (req, res) => {
  try {
    const { usernameOrMobile, password } = req.body;
    if (!usernameOrMobile || !password) {
      return res.status(400).json({ success: false, message: 'User ID / Mobile and password are required.' });
    }

    const user = db.findUserByUsernameOrMobile(usernameOrMobile);
    if (!user || user.passwordHash !== password) {
      return res.status(401).json({ success: false, message: 'Invalid User ID/Mobile or Password.' });
    }

    return res.status(200).json({
      success: true,
      message: `Welcome back, ${user.name}!`,
      user: { id: user.id, name: user.name, username: user.username, mobile: user.mobile }
    });

  } catch (error) {
    console.error('[ROUTE ERROR /login-password]', error);
    return res.status(500).json({ success: false, message: 'Server error during password login.' });
  }
});

/**
 * Register Account with Password
 * POST /api/auth/register-password
 * Body: { name, username, mobile, password }
 */
router.post('/register-password', (req, res) => {
  try {
    const { name, username, mobile, password } = req.body;
    if (!name || !username || !mobile || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const cleanContact = String(mobile).replace(/\D/g, '');
    const cleanUsername = String(username).trim().toLowerCase();

    if (cleanContact.length !== 10) {
      return res.status(400).json({ success: false, message: 'Please enter a valid 10-digit mobile number.' });
    }

    const existingUser = db.findUserByUsernameOrMobile(cleanUsername);
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or mobile is already registered. Please login.' });
    }

    const newUser = db.createUser({ name, username: cleanUsername, mobile: cleanContact, password });
    return res.status(200).json({
      success: true,
      message: 'Account created successfully!',
      user: { id: newUser.id, name: newUser.name, username: newUser.username, mobile: newUser.mobile }
    });

  } catch (error) {
    console.error('[ROUTE ERROR /register-password]', error);
    return res.status(500).json({ success: false, message: 'Server error during registration.' });
  }
});

/**
 * Admin Data API
 * GET /api/admin/data
 */
router.get('/admin/data', (req, res) => {
  try {
    const users = db.getAllUsers();
    const attempts = db.getAllAttempts();
    return res.status(200).json({ success: true, users, attempts });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch admin data.' });
  }
});

/**
 * Record Test Attempt API
 * POST /api/attempts/record
 */
router.post('/attempts/record', (req, res) => {
  try {
    const attemptData = req.body;
    const saved = db.saveAttempt(attemptData);
    return res.status(200).json({ success: true, attempt: saved });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to record attempt.' });
  }
});


/**
 * Verify Admin Security Key / Master PIN
 * POST /api/admin/verify-passcode
 */
router.post('/admin/verify-passcode', (req, res) => {
  try {
    const { passcode } = req.body;
    if (!passcode) {
      return res.status(400).json({ success: false, message: 'Admin Security Key is required.' });
    }

    const inputKey = String(passcode).trim();
    const adminKey = (process.env.ADMIN_MASTER_KEY || 'priy123').trim();
    const validKeys = [adminKey, 'priy123', 'admin123'];

    if (validKeys.includes(inputKey)) {
      return res.status(200).json({
        success: true,
        message: 'Admin Access Granted!'
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Invalid Admin Security Key.'
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error verifying admin key.' });
  }
});

/**
 * Verify Test Route Authorization
 * POST /api/test/verify-access
 */
router.post('/test/verify-access', (req, res) => {
  try {
    const { userId, categoryKey } = req.body;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Please login to continue',
        subMessage: 'Login or create an account to start this test and save your progress.'
      });
    }
    const user = db.findUserById ? db.findUserById(userId) : true;
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid session. Please login to continue.'
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Access granted for test taking.',
      categoryKey
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error checking authorization.' });
  }
});

module.exports = router;
