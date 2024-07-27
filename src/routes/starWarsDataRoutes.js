const express = require('express');
const router = express.Router();
const starWarsDataController = require('../controllers/starWarsDataController');

router.post('/data', starWarsDataController.fetchAndStoreStarWarsData);

module.exports = router;
