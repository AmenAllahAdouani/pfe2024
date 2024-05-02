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
        const newsletterContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>Newsletter</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background: #ffffff;
                        padding: 20px;
                    }
                    .header {
                        background-color: #FFC107;
                        color: #ffffff;
                        padding: 10px 20px;
                        text-align: center;
                    }
                    .content {
                        padding: 20px;
                        text-align: left;
                    }
                    .footer {
                        font-size: 12px;
                        text-align: center;
                        padding: 20px;
                        border-top: 1px solid #DDDDDD;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Welcome to Our Weekly Newsletter!</h1>
                    </div>
                    <div class="content">
                        <h2>Latest Updates</h2>
                        <p>Hello, thank you for subscribing to our newsletter. Here are some of the latest updates from our team.</p>
                        <h3>Feature Spotlight</h3>
                        <p>This week, we've rolled out several new features that you might find interesting:</p>
                        <ul>
                            <li>Upcoming Networking Event</li>
                            <li>Journey Checkpoint</li>
                            <li>Community Stories</li>
                            <li>What's happening at Tabaani</li>
                        </ul>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 Tabaani Wonder. All rights reserved.</p>
                        <p>To unsubscribe from this newsletter, click <a href="your-unsubscribe-link">here</a>.</p>
                    </div>
                </div>
            </body>
            </html>
            `;

        subscribers.forEach(subscriber => {
            sendEmail(subscriber.email, "Our Latest Newsletter", newsletterContent);
        });
    } catch (error) {
        console.error('Error fetching subscribers or sending emails:', error);
    }
}

sendNewsletterToAll();
