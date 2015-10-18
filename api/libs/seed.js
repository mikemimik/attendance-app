var _ = require('lodash');
var async = require('async');
var fs = require('fs');

var db = require('./db');
var model = require('../models');
var seedfns = require('./seed-fns');



// TODO: create association function for all the models
var seed = {
  init: function() {
    async.parallel([
      seedfns.group,
      seedfns.level,
      seedfns.trainingDay,
      seedfns.member
    ],
    function(err, results) {
      console.log('###@@@ TESTING - INSIDE seed.js');
      fs.writeFileSync('seed-test.json', JSON.stringify(results), 'utf8');
      var wrapped_models = {};
      _.map(results, function(outer_value, outer_key) {
        _.map(outer_value, function(inner_value, inner_key) {
          wrapped_models[inner_key] = inner_value;
        });
      });

      wrapped_models.trainingDays[0].setMembers([
        wrapped_models.members[0]
      ]);
      // Set first two athletes into the 'pre-comp group'
      // wrapped_models.members[0].setGroups([wrapped_models.groups[0]]);
      // wrapped_models.members[1].setGroups([wrapped_models.groups[0]]);

      // TODO: make this a forloop through the array
      // Set 'national group' to all the days
      // wrapped_models
      //   .groups[3]
      //   .setTrainingDays([
      //     wrapped_models.trainingDays[0],
      //     wrapped_models.trainingDays[1],
      //     wrapped_models.trainingDays[2],
      //     wrapped_models.trainingDays[3],
      //     wrapped_models.trainingDays[4]
      //   ]);
      // wrapped_models
      //   .groups[1]
      //   .setTrainingDays([
      //     wrapped_models.trainingDays[0],
      //     wrapped_models.trainingDays[1],
      //     wrapped_models.trainingDays[2],
      //     wrapped_models.trainingDays[3]
      //   ]);
      // wrapped_models
      //   .groups[2]
      //   .setTrainingDays([
      //     wrapped_models.trainingDays[0],
      //     wrapped_models.trainingDays[1],
      //     wrapped_models.trainingDays[3],
      //     wrapped_models.trainingDays[4]
      //   ]);
      // wrapped_models
      //   .groups[0]
      //   .setTrainingDays([
      //     wrapped_models.trainingDays[0],
      //     wrapped_models.trainingDays[3]
      //   ]);
    }); // End of callback
  },
  _associate: function(context) {
    console.log('context', context);

  }
};

// TODO: check if bindAll needed now?
module.exports = _.bindAll(seed);