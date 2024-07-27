const Data = require('../models/data');
const { v4: uuidv4 } = require('uuid');

exports.saveData = async (items,nameApi) => {
    try {
        const savedData = await Promise.all(items.map(async item => {
            let { id: apiId, name } = item;

            if (!apiId) {
                apiId = uuidv4(); // Generar un UUID aleatorio si no está presente
            }

            const existingData = await Data.findOne({ apiId });

            if (existingData) {
                // Si el documento ya existe, se actualiza
                existingData.name = name;
                existingData.nameApi=nameApi;
                existingData.updatedAt = new Date();
                return await existingData.save();
            } else {
                // Si el documento no existe, se crea uno nuevo
                const newData = new Data({ apiId, name, nameApi });
                return await newData.save();
            }
        }));

        return savedData;
    } catch (error) {
        throw new Error(`Error saving data: ${error.message}`);
    }
};

exports.findByNameApi = async (nameApi, page = 1, limit = 10) => {
    try {
        const skip = (page - 1) * limit;
        const data = await Data.find({ nameApi })
            .skip(skip)
            .limit(limit);
        return data;
    } catch (error) {
        throw new Error(`Error finding data: ${error.message}`);
    }
};

exports.countByNameApi = async (nameApi) => {
    try {
        const count = await Data.countDocuments({ nameApi });
        return count;
    } catch (error) {
        throw new Error(`Error counting data: ${error.message}`);
    }
};

exports.findAll = async (page = 1, limit = 10) => {
    try {
        const skip = (page - 1) * limit;
        const data = await Data.find()
            .skip(skip)
            .limit(limit);
        return data;
    } catch (error) {
        throw new Error(`Error finding all data: ${error.message}`);
    }
};

exports.countAll = async () => {
    try {
        const count = await Data.countDocuments();
        return count;
    } catch (error) {
        throw new Error(`Error counting all data: ${error.message}`);
    }
};