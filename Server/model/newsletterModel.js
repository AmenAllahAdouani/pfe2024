const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;