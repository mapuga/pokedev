// Modelo PokenTeam
const mongoose = require('mongoose');
// var PokenUser = mongoose.model('PokenUser');
const Pokemon = require('./Pokemon');

const pokenteamSchema = new mongoose.Schema({
    teamname: String,
    username: {
        type: mongoose.Schema.ObjectId,
        ref: 'PokenUser'
    },
    pokemons: [{
        type: Pokemon
    }]
});

/** Body
{
    "teamname": "Equipo 1",
    "username": "id_user"
}
 */

// Limitar a que solo se tengan 3 pokemos
const limit3pokemons = (pokemons) => {
    if (pokemons >= 4)
        pokemons.splice(4, 1);

    return pokemons;
}
const PokenTeam = mongoose.model('PokenTeam', pokenteamSchema);

module.exports = PokenTeam;