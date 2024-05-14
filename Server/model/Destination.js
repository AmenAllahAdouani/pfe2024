const mongoose = require('mongoose')

const DestinationSchema = new mongoose.Schema({
    Details: {
        destination: String,
        currency: String,
        timezone: String,
        language: String,
        transport: String
    }
})

const DestinationModel = mongoose.model('Destination', DestinationSchema)
module.exports = DestinationModel