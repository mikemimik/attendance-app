var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var model = require('../../models');
var insertDate = new Date();

module.exports = function(callback) {
  var result = {};
  result.members = [];
  // EXAMPLE
  // model.Member.create({
  //   firstName: 'bullshit',
  //   lastName: 'bullshit',
  //   dob: insertDate,
  //   Groups: [
  //     {
  //       title: 'bullshit group',
  //       description: 'total bullshit'
  //     }
  //   ]
  // }, {
  //   include: [ model.Group ]
  // }).then(function(member) {
  //   this.result.members.push(member);
  // });

  // CURRENT WORKING

  // INFO: read data from json file
  var dataPath = path.join(__dirname, '..', 'seed-data', 'members.json');
  fs.readFile(dataPath, 'utf8', function(err, data) {
    if (err) { throw err; }

    // INFO: parse data from json file
    var dataMembers = JSON.parse(data);
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
};