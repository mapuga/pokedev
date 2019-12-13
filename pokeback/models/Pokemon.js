// Modelo Pokemon
const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    namepokemon: String,
    idpokemon: Number,
    moves: {
        type: String,
        default: ''
    },
    sprites: {
        type: String,
        default: ''
    },
    typepokemon: {
        type: String,
        default: ''
    }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;