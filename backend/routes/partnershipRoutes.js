const express = require('express');
const router = express.Router();
const { submitPartnershipForm, getAllPartnershipForms } = require('../controllers/partnershipController');
const upload = require('../middleware/upload');

// POST /api/partnership - Submit partnership form with file upload
router.post('/', upload.single('logo'), submitPartnershipForm);

// GET /api/partnership - Get all partnership forms (admin)
router.get('/', getAllPartnershipForms);

module.exports = router;
