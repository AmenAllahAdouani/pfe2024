const Newsletter = require('../model/newsletterModel');
const { sendEmail } = require('./emailService');
const Subscriber = require('../model/Subscriber');

async function sendNewsletterToSubscribers() {
    try {
        // Retrieve the latest newsletter
        const latestNewsletter = await Newsletter.findOne().sort({ createdAt: -1 });

        if (!latestNewsletter) {
            console.error('No newsletter found');
            return;
        }

        const subscribers = await Subscriber.find({}); // Fetch all subscribers

        // Compose email content with dynamic newsletter title and content
        const newsletterContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>${latestNewsletter.title}</title>
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
                        <h1>${latestNewsletter.title}</h1>
                    </div>
                    <div class="content">
                        <p>${latestNewsletter.content}</p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 Tabaani Wonder. All rights reserved.</p>
                        <p>To unsubscribe from this newsletter, click <a href="your-unsubscribe-link">here</a>.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Send email to each subscriber
        subscribers.forEach(subscriber => {
            sendEmail(subscriber.email, latestNewsletter.title, newsletterContent);
        });
    } catch (error) {
        console.error('Error sending newsletter to subscribers:', error);
    }
}

module.exports = { sendNewsletterToSubscribers };
