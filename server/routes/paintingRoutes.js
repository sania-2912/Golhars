const express = require('express');
const router = express.Router();
const { getAllPaintings, getPaintingById } = require('../controllers/paintingController');

// Fetch all paintings
router.get('/', getAllPaintings);

// Fetch single painting by ID
router.get('/:id', getPaintingById);

module.exports = router;
