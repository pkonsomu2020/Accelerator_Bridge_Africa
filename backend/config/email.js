const { Resend } = require('resend');
require('dotenv').config();

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Send email using Resend
const sendEmail = async ({ from, to, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html
    });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('❌ Resend email error:', error);
    throw error;
  }
};

// Verify email configuration
const verifyEmailConfig = async () => {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not configured');
    }
    console.log('✅ Resend email configuration verified');
    return true;
  } catch (error) {
    console.error('⚠️  Email configuration warning:', error.message);
    console.log('📧 Email will be tested when first message is sent');
    return false;
  }
};

module.exports = { sendEmail, verifyEmailConfig };
