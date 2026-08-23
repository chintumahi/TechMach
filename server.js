require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend assets
app.use(express.static(__dirname));

// Register API Routes
app.use('/api', authRoutes);

// Fallback route to serve index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Determine OTP Provider
const brevoKey = (process.env.BREVO_API_KEY || '').trim();
const hasValidBrevo = brevoKey.length > 10;
const providerDisplay = hasValidBrevo ? 'BREVO (EMAIL)' : 'MISCONFIGURED (BREVO_API_KEY MISSING)';

// Start Server
app.listen(PORT, () => {
  console.log(`\n============================================================`);
  console.log(`🚀 TechMach Mock Test Server running at http://localhost:${PORT}`);
  console.log(`🔐 OTP Provider: ${providerDisplay}`);
  if (hasValidBrevo) {
    console.log(`📧 Verified Brevo Sender: ${process.env.BREVO_SENDER_EMAIL || 'priyranjankumar7890@gmail.com'}`);
  } else {
    console.error(`⚠️ CONFIG ERROR: BREVO_API_KEY is not set in .env! Email OTP delivery will fail.`);
  }
  console.log(`============================================================\n`);
});
