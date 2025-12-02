const express = require('express');
const router = express.Router();
const { submitContactForm, getAllContactForms } = require('../controllers/contactController');

// POST /api/contact - Submit contact form
router.post('/', submitContactForm);

// GET /api/contact - Get all contact forms (admin)
router.get('/', getAllContactForms);

module.exports = router;
