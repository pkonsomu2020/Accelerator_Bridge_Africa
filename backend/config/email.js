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

// Verify transporter configuration with timeout
const verifyEmailConfig = async () => {
  try {
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email verification timeout')), 10000)
    );
    
    await Promise.race([transporter.verify(), timeoutPromise]);
    console.log('✅ Email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('⚠️  Email verification skipped:', error.message);
    console.log('📧 Email will be tested when first message is sent');
    return false;
  }
};

module.exports = { transporter, verifyEmailConfig };
