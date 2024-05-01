const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    id: String,
    Questions: {
        Question1: String,
        Question2: String,
        Question3: String
    }
})

const ReviewsModel = mongoose.model('Reviews', UsersSchema)
module.exports = ReviewsModel