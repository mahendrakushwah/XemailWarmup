const express = require('express')
const SMTPConnection = require("nodemailer/lib/smtp-connection");
// const path = require('path')
const nodemailer = require('nodemailer')
require('dotenv').config()

const transport = {
    //this is the authentication for sending email.
    service: "Outlook365",
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secureConnection: false, // TLS requires secureConnection to be false
    secure: true, // use TLS
    //create a .env file and define the process.env variables with your credentials.
    auth: {
        user: process.env.SMTP_TO_EMAIL,
        pass: process.env.SMTP_TO_PASSWORD,
    },
}

exports.Dashboard = async (req, res) => {
    res.render('dashboard');
}
exports.SendMail = async (req, res) => {
    const transporter = nodemailer.createTransport(transport)
    transporter.verify((err, success) => {
        if (err) {
            //if error happened code ends here
            console.log(err)
        } else {
            //this means success
            console.log(success);

            var mailOptions = {
                from: process.env.SMTP_TO_EMAIL,
                to: "mskushwah0123@gmail.com",
                subject: "Test Nodemailer",
                text: "Plaintext version of the message",
                html: "<p>Hii This is nodemailer</p>"
              };
              transporter.sendMail(mailOptions, (err, result) => {
                if (err){
                console.log(err)
                    res.json('Opps error occured')
                } else{
                    res.json('thanks for e-mailing me');
                }
            })
        }
    })
    res.send("NodeMailer Send the message")
}