const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const { submitRequest, getUserRequests, getAllRequests, updateRequestStatus } = require('../controllers/requestController');

// File upload setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// User routes
router.post('/', protect, upload.single('documents'), submitRequest);
router.get('/my-requests', protect, getUserRequests);

// Admin routes
router.get('/all', protect, adminOnly, getAllRequests);
router.put('/:id/status', protect, adminOnly, updateRequestStatus);

module.exports = router;