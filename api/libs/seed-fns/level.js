var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var model = require('../../models');

module.exports = function(callback) {
  var result = {};
  result.levels = [];

  // INFO: read data from json file
  var dataPath = path.join(__dirname, '..', 'seed-data', 'levels.json');
  fs.readFile(dataPath, 'utf8', function(err, data) {
    if (err) { throw err; }

    // INFO: parse data from json file
    var dataLevels = JSON.parse(data);
    var endFunction = _.after(dataLevels.length, function() {
      callback(null, result);
    });
    _.forEach(dataLevels, function(level) {

      // INFO: for each level, create db model
      model.Level.create({
        title: level.title,
        description: level.description
      }).then(function(createdLevel) {

        // INFO: add created level to results
        result.levels.push(createdLevel);
        endFunction();
      });
    });
  });
};