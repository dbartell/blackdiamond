var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');

var hotOilTrucksController = require('./controllers/hotOilTrucksCtrl')

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/build/hotoil', hotOilTrucksController.read);
app.post('/build/hotoil', hotOilTrucksController.create);

var port = 8080;

app.listen(port, function() {
    console.log('listening at port: ' + port);
})

var mongoURI = 'mongodb://localhost:27017/black-diamond';

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
   console.log('What\'s good Mongoose');
})
