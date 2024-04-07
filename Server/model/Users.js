const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    Destination: String,
    Duration: String,
    withWhom: String,
    Interests: {
        foodie: Number,
        HistoryBuff: Number,
        StyleIcon: Number,
        Adventures: Number,
        ArtLover: Number,
        NightOwl: Number
    },
    Budget: String
})

const UsersModel = mongoose.model('Users', UsersSchema)
module.exports = UsersModel