// Modelo UserPoker
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
    games_won: {
        type: [String]
    }
});

const PokenUser = mongoose.model('PokenUser', pokenuserSchema);

module.exports = PokenUser;