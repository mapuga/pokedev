// Modelo PokenTeam
const mongoose = require('mongoose');

const pokenteamSchema = new mongoose.Schema({
    teamname: String,
    username: {
        type: mongoose.Schema.ObjectId
    },
    pokemon: {
        type: mongoose.Schema.ObjectId
    }
});

const PokenTeam = mongoose.model('PokenTeam', pokenteamSchema);

module.exports = PokenTeam;