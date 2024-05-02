const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ameallah07@gmail.com', // Replace with your email
        pass: 'bwuo zcvy pxxv mhau' // Replace with your email password or App Password
    }
});

// Function to send an email
async function sendEmail(to, subject, html) {
    const mailOptions = {
        from: 'ameallah07@gmail.com', // This should be the same as `auth.user`
        to: to,
        subject: subject,
        html: html
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully: ', result);
    } catch (error) {
        console.error('Failed to send email: ', error);
    }
}

module.exports = { sendEmail };
