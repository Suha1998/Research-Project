const express = require('express');
const emailRoutes = express.Router();
var nodemailer = require('nodemailer');
//let Email = require('../models/emails');
//const { default: Email } = require('../../src/components/Email.component');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
      user: 'kevinperera.mudiyanse@gmail.com',
      pass: '0718860169'
  }
});

emailRoutes.post('/sendmail', (req, res) => {
  var mailOptions = {
    from: 'kevinperera.mudiyanse@gmail.com',
    to: req.body.Emails,
    subject: req.body.Title,
    text: req.body.Message
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error.message);
    }
    console.log('success');
  });
});



module.exports = emailRoutes;