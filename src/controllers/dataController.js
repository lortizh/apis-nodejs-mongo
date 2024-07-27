const axios = require('axios');
const dataService = require('../services/dataService');

exports.fetchAndStoreData = async (req, res) => {
    try {
        // Realiza la solicitud a la API externa
        console.log('::> Rick and Morty Data Controller <::');
        const nameApi='rickandmorty';
        const response = await axios.get('https://rickandmortyapi.com/api/character');
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
