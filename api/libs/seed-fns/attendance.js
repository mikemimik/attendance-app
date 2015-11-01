var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var model = require('../../models');
var dataAttendances = null;

module.exports = {
  gen: function(callback) {
    var result = {};
    result.attendances = [];

    // INFO: read data from json file
    var dataPath = path.join(__dirname, '..', 'seed-data', 'attendances.json');
    fs.readFile(dataPath, 'utf8', function(err, data) {
      if (err) { throw err; }

      // INFO: parse data from json file
      dataAttendances = JSON.parse(data);
      var endFunction = _.after(dataAttendances.length, function() {
        callback(null, result);
      });
      _.forEach(dataAttendances, function(attendance) {

        // INFO: for each attendance, create db model
        model.Attendance.create({
          date: attendance.date
        }).then(function(createdAttendance) {

          // INFO: add created attendance to results
          result.attendances.push(createdAttendance);
          endFunction();
        });
      });
    });
  },
  map: function(models, callback) {
    console.log('seed-fns', 'attendance', 'map', 'entry_point');
    _.forEach(dataAttendances, function(value, key) {
      _.forEach(value.__members, function(id, key){
        models.members[id-1].addAbsents(models.attendances[value.__id-1]);
      });
    });
    console.log('seed-fns', 'attendance', 'map', 'callback', 'fire');
    callback(null, true);

    // OLD: for reference
    // model.Attendance.create({
    //   date: insertDate
    // }).then(function(absents) {
    //   // console.log('seed-fns', 'attendance', 'map', 'create', absents);

    //   console.log('seed-fns', 'attendance', 'map', 'setAbsents');
    //   models.members[0].addAbsents(absents);
    //   models.members[1].addAbsents(absents);

    //   console.log('seed-fns', 'attendance', 'map', 'callback', 'fire');
    //   callback(null, true);
    // });
  }
};