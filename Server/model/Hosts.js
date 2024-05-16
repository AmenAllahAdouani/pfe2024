const mongoose = require('mongoose')

const HostSchema = new mongoose.Schema({   
    Photo: String,
    Name: String,
    Expertise: String,
    Place: String
})

const HostModel = mongoose.model('Host', HostSchema)
module.exports = HostModel