const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    id: String,
    UserName: String,
    Questions: {
        Question1: String,
        Question2: String,
        Question3: String
    },
    ReviewDate: { type: Date, default: Date.now }
})

const ReviewsModel = mongoose.model('Reviews', UsersSchema)
module.exports = ReviewsModel