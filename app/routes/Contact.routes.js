//load the Contact model
var Contact = require('../models/contactme');
//load nodemailer
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'shakeliamjohnson@gmail.com',
        pass: 'kz102429'
    }
});

//expose the routes to our app with module.exports
module.exports = function(app) {
    // routes
    app.post('/contact', function(req, res) {
        transporter.sendMail({
            from: req.body.email,
            to: 'shakeliamjohnson@gmail.com',
            subject: 'Shakelia Johnson - Message from Portfolio Site',
            text: 'To whom it may concern:\n\n' + req.body.message +
                '\n\nFrom: ' + req.body.firstName + ' ' + req.body.lastName +
                '\nPhone: ' + req.body.phone +
                '\nSubmission Date: ' + req.body.date
        }, function(error, response){
          if(error){
            response.send('Email Error');
          }
          else {
            Contact.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message,
                date: req.body.date
            }, function(err, contact) {
                // if there is an error, send the error
                if (err) {
                    res.send(err);
                }
                // get and return contacts
                Contact.find(function(err, contacts) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(contacts);
                });
            });
          }
          transporter.close(); //close email connection
        });
    });
};
