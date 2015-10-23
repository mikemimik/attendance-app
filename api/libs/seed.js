var _ = require('lodash');
var async = require('async');
var fs = require('fs');

var db = require('./db');
var model = require('../models');
var seedfns = require('./seed-fns');



// TODO: create association function for all the models
var seed = {
  init: _.bind(function() {
    // Phase 1 - create models
    async.parallel([
      seedfns.group.gen,
      seedfns.level,
      seedfns.trainingDay,
      seedfns.member
    ],
    function(err, results) {
      console.log('###@@@ TESTING - INSIDE seed.js');
      // fs.writeFileSync('seed-test.json', JSON.stringify(results), 'utf8');
      var wrapped_models = {};
      _.map(results, function(outer_value, outer_key) {
        _.map(outer_value, function(inner_value, inner_key) {
          wrapped_models[inner_key] = inner_value;
        });
      });

      // Phase 2 - associations
      // INFO: call function to do this
      async.parallel([

      ],
      function(err, results) {

      });
      // Associations
      console.log('## LOOK HERE ##', wrapped_models.groups[0].title);
      // Provincial Group 1
      wrapped_models
        .groups[1]
          .setMembers([
            wrapped_models.members[11],
            wrapped_models.members[13],
            wrapped_models.members[16],
            wrapped_models.members[17],
            wrapped_models.members[23],
            wrapped_models.members[24],
            wrapped_models.members[26]
          ]);
      // Provincial Group 2
      wrapped_models
        .groups[2]
          .setMembers([
            wrapped_models.members[0],
            wrapped_models.members[3],
            wrapped_models.members[4],
            wrapped_models.members[5],
            wrapped_models.members[7],
            wrapped_models.members[10],
            wrapped_models.members[14],
            wrapped_models.members[18],
            wrapped_models.members[22],
            wrapped_models.members[25]
          ]);
      // National Group
      wrapped_models
        .groups[3]
          .setMembers([
            wrapped_models.members[1],
            wrapped_models.members[2],
            wrapped_models.members[6],
            wrapped_models.members[8],
            wrapped_models.members[9],
            wrapped_models.members[12],
            wrapped_models.members[15],
            wrapped_models.members[19],
            wrapped_models.members[20],
            wrapped_models.members[21]
          ]);

      // TRAINING DAYS
      // Sunday: 0
      wrapped_models
        .trainingDays[0]
          .setMembers([
            wrapped_models.members[0],
            wrapped_models.members[1],
            wrapped_models.members[2],
            wrapped_models.members[3],
            wrapped_models.members[4],
            wrapped_models.members[5],
            wrapped_models.members[6],
            wrapped_models.members[7],
            wrapped_models.members[8],
            wrapped_models.members[9],
            wrapped_models.members[10],
            wrapped_models.members[11],
            wrapped_models.members[12],
            wrapped_models.members[13],
            wrapped_models.members[14],
            wrapped_models.members[15],
            wrapped_models.members[16],
            wrapped_models.members[17],
            wrapped_models.members[18],
            wrapped_models.members[19],
            wrapped_models.members[20],
            wrapped_models.members[21],
            wrapped_models.members[22],
            wrapped_models.members[23],
            wrapped_models.members[24],
            wrapped_models.members[25],
            wrapped_models.members[26]
          ]);
      // Monday: 1
      // Tuesday: 2
      // Wednesday: 3
      wrapped_models
        .trainingDays[3]
          .setMembers([
            wrapped_models.members[0],
            wrapped_models.members[1],
            wrapped_models.members[2],
            wrapped_models.members[3],
            wrapped_models.members[4],
            wrapped_models.members[5],
            wrapped_models.members[6],
            wrapped_models.members[7],
            wrapped_models.members[8],
            wrapped_models.members[9],
            wrapped_models.members[10],
            wrapped_models.members[11],
            wrapped_models.members[12],
            wrapped_models.members[13],
            wrapped_models.members[14],
            wrapped_models.members[15],
            wrapped_models.members[16],
            wrapped_models.members[17],
            wrapped_models.members[18],
            wrapped_models.members[19],
            wrapped_models.members[20],
            wrapped_models.members[21],
            wrapped_models.members[22],
            wrapped_models.members[23],
            wrapped_models.members[24],
            wrapped_models.members[25],
            wrapped_models.members[26]
          ]);
      // Thursday: 4
    }); // End of callback
  }, this),
  _mapGroups: function(wrapped_models) {
    _.forEach(wrapped_models.groups, this._associateGroups, this);
  },
  _associateGroups: function(value, key) {
    console.log('value: ', value, 'key: ', key);
    var groups = {
      'pre-comp group': function() {},
      'provincial-group 1': function() {
        // for each in array
        // models.groups[]
      },
      'provincial-group 2': function() {},
      'national group': function() {}
    };
  }
};

// TODO: check if bindAll needed now?
module.exports = _.bindAll(seed);