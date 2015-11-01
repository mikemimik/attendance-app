var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var model = require('../../models');
var insertDate = new Date();
var dataMembers = null;

module.exports = {
  gen: function(callback) {
    var result = {};
    result.members = [];

    // INFO: read data from json file
    var dataPath = path.join(__dirname, '..', 'seed-data', 'members.json');
    fs.readFile(dataPath, 'utf8', function(err, data) {
      if (err) { throw err; }

      // INFO: parse data from json file
      dataMembers = JSON.parse(data);
      var endFunction = _.after(dataMembers.length, function() {
        callback(null, result);
      });
      _.forEach(dataMembers, function(member) {

        // INFO: for each member, create db model
        model.Member.create({
          firstName: member.firstName,
          lastName: member.lastName,
          dob: insertDate
        }).then(function(createdMember) {

          // INFO: add created member to results
          result.members.push(createdMember);
          endFunction();
        });
      });
    });
  },
  map: function(models, callback) {
    console.log('seed-fns', 'member', 'map', 'entry_point');
    _.forEach(dataMembers, function(value, key) {
      // console.log('seed-fns', 'member', 'map', 'forEach', 'key', key);
      // console.log('seed-fns', 'member', 'map', 'forEach', 'value', value);
      models.groups[value.__group-1].addMember(models.members[value.__id-1]);
    });
    console.log('seed-fns', 'member', 'map', 'callback', 'fire');
    callback(null, true);
  }
};