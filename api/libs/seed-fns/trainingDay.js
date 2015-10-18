var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var model = require('../../models');

module.exports = function(callback) {
  var result = {};
  result.trainingDays = [];

  var dataPath = path.join(__dirname, '..', 'seed-data', 'trainingDays.json');
  fs.readFile(dataPath, 'utf8', function(err, data) {
    if (err) { throw err; }

    // INFO: parse data from json file
    var dataTrainingDays = JSON.parse(data);
    var endFunction = _.after(dataTrainingDays.length, function() {
      callback(null, result);
    });
    _.forEach(dataTrainingDays, function(trainingDay) {

      // INFO: for each trainingDay, create db model
      model.TrainingDay.create({
        weekday: trainingDay.weekday
      }).then(function(createdTrainingDay) {

        // INFO: add created trainingDay to results
        result.trainingDays.push(createdTrainingDay);
        endFunction();
      });
    });
  });
};