// Import necessary libraries
const mongoose = require('mongoose');
const { sendEmail } = require('./emailService');
const Subscriber = require('../model/Subscriber');

// Database connection
mongoose.connect('mongodb://localhost:27017/', {})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error: ", err));

// Function to send newsletters to all subscribers
async function sendNewsletterToAll() {
    try {
        const subscribers = await Subscriber.find({}); // Fetch all subscribers
        const newsletterContent = '<h1>News Update</h1><p>Here is your latest newsletter...</p>';

        subscribers.forEach(subscriber => {
            sendEmail(subscriber.email, "Our Latest Newsletter", newsletterContent);
        });
    } catch (error) {
        console.error('Error fetching subscribers or sending emails:', error);
    }
}

sendNewsletterToAll();
