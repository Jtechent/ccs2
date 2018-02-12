/*
 * this will handle sending and parsing email reports
 * just the nodemailer test right now, works for me
 */

const mail = require("nodemailer");

mail.createTestAccount((err, account) => {
    if (err) {
        console.error("Failed to create a testing account. " + err.message);
        return process.exit(1);
    }

    console.log("Credentials obtained, sending message...");

    // Create a SMTP transporter object
    let transporter = mail.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });

    // Message object
    let message = {
        from: "Sender Name <sender@example.com>",
        to: "Recipient <recipient@example.com>",
        subject: "test",
        text: "Hello to myself!",
        html: "<p><b>Hello</b> to myself!</p>"
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log("Error occurred. " + err.message);
            return process.exit(1);
        }

        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", mail.getTestMessageUrl(info));
    });
});
