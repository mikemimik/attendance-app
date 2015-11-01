var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var model = require('../../models');
var dataTrainingDays = null;

module.exports = {
  gen: function(callback) {
    var result = {};
    result.trainingDays = [];

    var dataPath = path.join(__dirname, '..', 'seed-data', 'trainingDays.json');
    fs.readFile(dataPath, 'utf8', function(err, data) {
      if (err) { throw err; }

      // INFO: parse data from json file
      dataTrainingDays = JSON.parse(data);
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
  },
  map: function(models, callback) {
    console.log('seed-fns', 'trainingDay', 'map', 'entry_point');
    _.forEach(dataTrainingDays, function(day, key) {
      // console.log('seed-fns', 'member', 'map', 'forEach', 'key', key);
      if (Array.isArray(day.__members)) {

        // INFO: map only members in array
        _.forEach(day.__members, function(id, key) {
          models.trainingDays[day.__id-1].addMember(models.members[id-1]);
        });
      } else {

        // INFO: map all members
        _.forEach(models.members, function(member, key) {
          models.trainingDays[day.__id-1].addMember(member);
        });
      }
    });
    console.log('seed-fns', 'trainingDay', 'map', 'callback', 'fire');
    callback(null, true);
  }
};