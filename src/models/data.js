const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    apiId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nameApi: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
}, {
    versionKey: false, // Para omitir el campo "__v"
    timestamps: true, // Para que Mongoose maneje automáticamente "createdAt" y "updatedAt"
});

module.exports = mongoose.model('User', UserSchema);
