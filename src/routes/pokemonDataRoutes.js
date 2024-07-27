const express = require('express');
const router = express.Router();
const pokemonDataController = require('../controllers/pokemonDataController');

router.post('/data', pokemonDataController.fetchAndStorePokemonData);

module.exports = router;
