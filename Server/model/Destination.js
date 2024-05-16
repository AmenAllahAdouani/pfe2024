const mongoose = require('mongoose')

const DestinationSchema = new mongoose.Schema({
        name: String,
        currency: String,
        timezone: String,
        language: String,
        transport: String
})

const DestinationModel = mongoose.model('Destination', DestinationSchema)
module.exports = DestinationModel