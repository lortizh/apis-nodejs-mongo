const express = require('express');
const router = express.Router();
const starWarsDataController = require('../controllers/starWarsDataController');

router.get('/data', starWarsDataController.fetchAndStoreStarWarsData);

module.exports = router;
