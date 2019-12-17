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

/** Body
{
    "namepokemon": "Pikachu",
    "idpokemon": 20,
    "moves": "",
    "sprites": "",
    "typepokemon": ""
}
 */


module.exports = pokemonSchema;