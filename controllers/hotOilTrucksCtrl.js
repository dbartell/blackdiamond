var hotOilTruck = require('../models/hotOilTrucks');

module.exports = {
  read: function(req, res) {
    hotOilTruck.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  },
  create: function(req, res) {
    hotOilTruck.create(req.body, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  }
}
