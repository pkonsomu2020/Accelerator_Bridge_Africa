const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Verify transporter configuration
const verifyEmailConfig = async () => {
  try {
    await transporter.verify();
    console.log('✅ Email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('❌ Email configuration failed:', error.message);
    return false;
  }
};

module.exports = { transporter, verifyEmailConfig };
