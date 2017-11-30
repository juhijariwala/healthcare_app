'use strict'

var express = require('express');
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.API_PORT || 3001;
app.use(require('./routes/route'));
app.use("/providers",require('./routes/route'));
app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('/', function(request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  app.use(express.static('client/build'));
}

app.listen(port, function() {
	console.log(`api running on port ${port}`);
});

mongoose.connect('mongodb://admin:admin@ds119486.mlab.com:19486/healthcare', { useMongoClient: true });
