const axios = require('axios');
const dataService = require('../services/dataService');

exports.fetchAndStorePokemonData = async (req, res) => {
    try {
        // Realiza la solicitud a otra API externa
        console.log('::> Pokemon Data Controller <::');
        const nameApi='pokemon';
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        const data = response.data;
        const results = data.results;
        console.log(results);

        // Usa el servicio para guardar los datos
        const savedData = await dataService.saveData(results,nameApi);

        res.status(200).json(savedData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
