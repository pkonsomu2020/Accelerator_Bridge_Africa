const { supabase } = require('../config/supabase');
const { transporter } = require('../config/email');

// Submit contact form
const submitContactForm = async (req, res) => {
  try {
    const { name, email, description } = req.body;

    // Validate required fields
    if (!name || !email || !description) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_forms')
      .insert([{ name, email, description }])
      .select();

    if (error) {
      throw error;
    }

    const insertedRecord = data[0];

    // Send email notification to admin
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${description.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from The Accelerator Bridge contact form.</p>
            <p>Submission ID: ${insertedRecord.id}</p>
            <p>Date: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const confirmationMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting The Accelerator Bridge',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting The Accelerator Bridge. We have received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p>${description.replace(/\n/g, '<br>')}</p>
          </div>
          <p>If you have any urgent questions, feel free to reach out to us directly at:</p>
          <ul>
            <li>Email: community@secretstartups.org</li>
            <li>Phone: +254 111 566445</li>
          </ul>
          <p>Best regards,<br>The Accelerator Bridge Team</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>© 2025 SkillME X SecretStartups - The Accelerator Bridge</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: insertedRecord.id,
        name,
        email
      }
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form',
      error: error.message
    });
  }
};

// Get all contact form submissions (admin)
const getAllContactForms = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('contact_forms')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    res.status(200).json({
      success: true,
      count: data.length,
      data: data
    });

  } catch (error) {
    console.error('Error fetching contact forms:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact forms',
      error: error.message
    });
  }
};

module.exports = {
  submitContactForm,
  getAllContactForms
};
