const { supabase } = require('../config/supabase');
const { transporter } = require('../config/email');

// Submit partnership form
const submitPartnershipForm = async (req, res) => {
  try {
    const {
      organizationName,
      contactPersonName,
      email,
      phoneNumber,
      organizationDescription,
      partnershipDescription,
      additionalInfo
    } = req.body;

    // Validate required fields
    if (!organizationName || !email || !organizationDescription || !partnershipDescription) {
      return res.status(400).json({
        success: false,
        message: 'Required fields: organizationName, email, organizationDescription, partnershipDescription'
      });
    }

    // Upload logo to Supabase Storage if file was uploaded
    let logoUrl = null;
    
    if (req.file) {
      const timestamp = Date.now();
      const sanitizedName = req.file.originalname.replace(/\s+/g, '-');
      const logoFileName = `${timestamp}-${sanitizedName}`;
      
      console.log('📤 Uploading logo to Supabase Storage:', logoFileName);
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('partnership-logos')
        .upload(logoFileName, req.file.buffer, {
          contentType: req.file.mimetype,
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('❌ Logo upload error:', uploadError);
        throw new Error(`Logo upload failed: ${uploadError.message}`);
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('partnership-logos')
        .getPublicUrl(logoFileName);
      
      logoUrl = urlData.publicUrl;
      console.log('✅ Logo uploaded successfully:', logoUrl);
    }

    // Insert into Supabase database
    const { data, error} = await supabase
      .from('partnership_forms')
      .insert([{
        organization_name: organizationName,
        contact_person_name: contactPersonName || null,
        email,
        phone_number: phoneNumber || null,
        organization_description: organizationDescription,
        logo_url: logoUrl,
        partnership_description: partnershipDescription,
        additional_info: additionalInfo || null
      }])
      .select();

    if (error) {
      throw error;
    }

    const insertedRecord = data[0];

    // Prepare email attachments - logo is in Supabase Storage
    const attachments = [];

    // Send email notification to admin
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Partnership Request - ${organizationName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Partnership Request
          </h2>
          <div style="margin: 20px 0;">
            <h3 style="color: #1F2937;">Organization Details</h3>
            <p><strong>Organization Name:</strong> ${organizationName}</p>
            ${contactPersonName ? `<p><strong>Contact Person:</strong> ${contactPersonName}</p>` : ''}
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ''}
            
            ${logoUrl ? `
              <div style="margin: 20px 0;">
                <p><strong>Logo:</strong></p>
                <img src="${logoUrl}" alt="Organization Logo" style="max-width: 200px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px;">
                <p><a href="${logoUrl}" target="_blank" style="color: #4F46E5;">View Full Size</a></p>
              </div>
            ` : ''}
            
            <h3 style="color: #1F2937; margin-top: 20px;">Organization Description</h3>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
              ${organizationDescription.replace(/\n/g, '<br>')}
            </div>

            <h3 style="color: #1F2937; margin-top: 20px;">Partnership Description</h3>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
              ${partnershipDescription.replace(/\n/g, '<br>')}
            </div>

            ${additionalInfo ? `
              <h3 style="color: #1F2937; margin-top: 20px;">Additional Information</h3>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
                ${additionalInfo.replace(/\n/g, '<br>')}
              </div>
            ` : ''}
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from The Accelerator Bridge partnership form.</p>
            <p>Submission ID: ${insertedRecord.id}</p>
            <p>Date: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      attachments
    };

    // Respond immediately to frontend
    res.status(201).json({
      success: true,
      message: 'Partnership form submitted successfully',
      data: {
        id: insertedRecord.id,
        organizationName,
        email,
        logoUrl
      }
    });

    // Send emails asynchronously (don't wait for them)
    setImmediate(async () => {
      try {
        // Send email notification to admin
        await transporter.sendMail(mailOptions);
        console.log('✅ Admin notification email sent for partnership:', organizationName);

        // Send confirmation email to partner
        const confirmationMailOptions = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: 'Thank you for your Partnership Interest - The Accelerator Bridge',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
                Thank You for Your Partnership Interest!
              </h2>
              <p>Dear ${contactPersonName || 'Partner'},</p>
              <p>Thank you for expressing interest in partnering with The Accelerator Bridge. We are excited about the possibility of working together!</p>
              
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #1F2937; margin-top: 0;">Your Submission Details</h3>
                <p><strong>Organization:</strong> ${organizationName}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ''}
              </div>

              <p>Our team will review your partnership request and get back to you within 2-3 business days to discuss the next steps.</p>
              
              <h3 style="color: #1F2937;">What Happens Next?</h3>
              <ol style="line-height: 1.8;">
                <li>Our team reviews your partnership proposal</li>
                <li>We'll schedule a call to discuss opportunities</li>
                <li>We'll work together to create a mutually beneficial partnership</li>
              </ol>

              <p>If you have any immediate questions, please don't hesitate to reach out:</p>
              <ul>
                <li>Email: community@secretstartups.org</li>
                <li>Phone: +254 111 566445</li>
              </ul>

              <p>We look forward to potentially partnering with you!</p>
              <p>Best regards,<br>The Accelerator Bridge Team</p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                <p>© 2025 SkillME X SecretStartups - The Accelerator Bridge</p>
              </div>
            </div>
          `
        };

        await transporter.sendMail(confirmationMailOptions);
        console.log('✅ Confirmation email sent to partner:', email);
      } catch (emailError) {
        console.error('❌ Error sending emails:', emailError.message);
        // Don't throw - emails are not critical for form submission
      }
    });

  } catch (error) {
    console.error('Error submitting partnership form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit partnership form',
      error: error.message
    });
  }
};

// Get all partnership form submissions (admin)
const getAllPartnershipForms = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('partnership_forms')
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
    console.error('Error fetching partnership forms:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch partnership forms',
      error: error.message
    });
  }
};

module.exports = {
  submitPartnershipForm,
  getAllPartnershipForms
};
