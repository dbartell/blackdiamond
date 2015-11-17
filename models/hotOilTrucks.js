var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  build: [{
      name: {type: String},
      info: {type: String}
    }]
});

module.exports = mongoose.model('hotOilTruck', Schema);
