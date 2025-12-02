const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

const { testConnection } = require('./config/supabase');
const { verifyEmailConfig } = require('./config/email');
const contactRoutes = require('./routes/contactRoutes');
const partnershipRoutes = require('./routes/partnershipRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://acceleratorbridge.skillyme.africa',
  credentials: true
}));
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '200mb' }));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/partnership', partnershipRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Accelerator Bridge API - Production',
    version: '1.0.0',
    environment: process.env.NODE_ENV,
    endpoints: {
      contact: '/api/contact',
      partnership: '/api/partnership',
      health: '/api/health'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  // Handle Multer errors
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size too large. Maximum size is 200MB. Please upload a smaller image.'
      });
    }
    return res.status(400).json({
      success: false,
      message: `File upload error: ${err.message}`
    });
  }
  
  // Handle other file upload errors
  if (err.message && err.message.includes('Only image files are allowed')) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
  
  // Generic error
  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
const startServer = async () => {
  try {
    // Test Supabase connection
    const dbConnected = await testConnection();
    if (!dbConnected) {
      console.error('⚠️  Warning: Supabase connection failed. Please check your configuration.');
    }

    // Verify email configuration
    const emailConfigured = await verifyEmailConfig();
    if (!emailConfigured) {
      console.error('⚠️  Warning: Email configuration failed. Please check your SMTP settings.');
    }

    // Start listening
    app.listen(PORT, () => {
      console.log('='.repeat(50));
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
      console.log(`📧 Email: ${process.env.SMTP_USER}`);
      console.log(`🗄️  Database: Supabase`);
      console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL}`);
      console.log('='.repeat(50));
      console.log('\nAvailable endpoints:');
      console.log(`  POST /api/contact`);
      console.log(`  POST /api/partnership`);
      console.log(`  GET  /api/health`);
      console.log('='.repeat(50));
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
