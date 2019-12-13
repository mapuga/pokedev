// Modelo PokenTeam
const mongoose = require('mongoose');
const PokenUser = mongoose.model(PokenUser);

const pokenteamSchema = new mongoose.Schema({
    teamname: String,
    username: {
        type: Schema.ObjectId,
        ref: PokenUser
    },
    pokemon: {
        type: Schema.ObjectId,
        ref: [PokenUser]
    }
});

const PokenTeam = mongoose.model('PokenTeam', pokenteamSchema);

module.exports = PokenTeam;