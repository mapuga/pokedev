// Modelo PokenUser
const mongoose = require('mongoose');

const pokenuserSchema = new mongoose.Schema({
    username: String,
    country: {
        type: String,
        enum: ['MX', 'USA', 'BR']
    },
    sex: {
        type: String,
        enum: ['F', 'M', 'SN']
    },
    gameswon: {
        type: [String]
    }
});

/** Body
{
    "username": "Player01",
    "country": "MX",
    "sex": "M",
    "gameswon": ["Game 1"]
}
*/
const PokenUser = mongoose.model('PokenUser', pokenuserSchema);

module.exports = PokenUser;