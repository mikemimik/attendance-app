var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var async = require('async');

var model = require('../../models');

var dataGroups = null;

module.exports = {
  gen: function(callback) {
    var result = {};
    result.groups = [];

    // INFO: read data from json file
    var dataPath = path.join(__dirname, '..', 'seed-data', 'groups.json');
    fs.readFile(dataPath, 'utf8', function(err, data) {
      if (err) { throw err; }

      // INFO: parse data from json file
      dataGroups = JSON.parse(data);
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
          // console.log('createdGroup', createdGroup);
          endFunction();
        });
      });
    });
  },
  map: function(models, callback) {
    console.log('seed-fns', 'group', 'map', 'entry_point');
    var result = {};
    result = dataGroups;
    console.log('seed-fns', 'group', 'map', 'callback', 'fire');
    callback(null, true);
  }
};