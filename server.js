// set up
var express = require('express'); // express framework import
var app = express(); // create our app with express framework
var morgan = require('morgan'); // import morgan request logger (logs requests to console)
var bodyParser = require('body-parser'); // import json body parser
var path = require('path');
var methodOverride = require('method-override'); // simulate delete and put
var mongoose = require('mongoose');
var mongoConn = require('./db/mongoConn');

mongoose.connect(mongoConn.url);

app.use(express.static(__dirname + '/app'));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(methodOverride());

require('./app/routes/Portfolio.routes')(app);
require('./app/routes/Contact.routes')(app);


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,'/app', 'index.html'));
  });

// listen (start app with node server.js)
app.listen(8080);
console.log('App listening on port 8080');
