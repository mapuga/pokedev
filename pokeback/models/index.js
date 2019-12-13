const mongoose = require('mongoose');
const PokenUser = require('./PokenUser');

const URL = 'mongodb+srv://admin:123123AB@cluster0-7iyok.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URL, (err) => {
    if (!err) console.log('Connection to Mongo success...')
    else console.log(err);
});

module.exports = {
    PokenUser
}