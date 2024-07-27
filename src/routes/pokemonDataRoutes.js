const express = require('express');
const router = express.Router();
const pokemonDataController = require('../controllers/pokemonDataController');

router.get('/data', pokemonDataController.fetchAndStorePokemonData);

module.exports = router;
