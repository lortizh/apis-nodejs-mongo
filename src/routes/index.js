const express = require('express');
const router = express.Router();
const dataRoutes = require('./dataRoutes');
const pokemonDataRoutes = require('./pokemonDataRoutes');
const starWarsDataRoutes = require('./starWarsDataRoutes');
const searchByNameApiRoutes = require('./searchByNameApiRoutes');

router.use('/rickandmorty', dataRoutes);
router.use('/pokemon', pokemonDataRoutes);
router.use('/starwars', starWarsDataRoutes);
router.use('/data',searchByNameApiRoutes);

module.exports = router;
