const nodemailer = require('nodemailer');

async function sendTestEmail() {
    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ameallah07@gmail.com', // Replace with your actual email
            pass: 'bwuo zcvy pxxv mhau'   // Replace with your actual password or App Password
        }
    });

    // Email options
    let mailOptions = {
        from: 'ameallah07@gmail.com',     // sender address
        to: 'essiabillekoud@gmail.com',  // list of receivers
        subject: 'Hello from Node.js!',   // Subject line
        text: 'This is a Node.js email test.', // plain text body
        html: '<b>This is a Node.js email test.</b>' // html body
    };

    // Send email
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}


console.log("service is running");

sendTestEmail();
