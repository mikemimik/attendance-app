var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var model = require('../../models');

module.exports = function(callback) {
  var result = {};
  result.groups = [];

  // INFO: read data from json file
  var dataPath = path.join(__dirname, '..', 'seed-data', 'groups.json');
  fs.readFile(dataPath, 'utf8', function(err, data) {
    if (err) { throw err; }

    // INFO: parse data from json file
    var dataGroups = JSON.parse(data);
    var endFunction = _.after(dataGroups.length, function() {
      callback(null, result);
    });
    _.forEach(dataGroups, function(group) {

      // INFO: for each member, create db model
      model.Group.create({
        title: group.title,
        description: group.description
      }).then(function(createdGroup) {

        // INFO: add created group to results
        result.groups.push(createdGroup);
        endFunction();
      });
    });
  });
};