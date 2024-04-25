const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    Destination: {
        id: String,
        name: String,
        timezone: String,
        currency: String,
        language: String,
        transport: String
    },
    Duration: {
        from: Date,
        to: Date,
        numberOfDays: Number
    },
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