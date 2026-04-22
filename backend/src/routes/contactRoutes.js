const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const { submitMessage, getAllMessages } = require('../controllers/contactController');

// Public route
router.post('/', submitMessage);

// Admin route
router.get('/all', protect, adminOnly, getAllMessages);

module.exports = router;