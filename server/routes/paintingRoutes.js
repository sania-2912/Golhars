const express = require('express');
const router = express.Router();
const { getAllPaintings, getPaintingById } = require('../controllers/paintingController');

router.get('/', getAllPaintings);

router.get('/:id', getPaintingById);

module.exports = router;
