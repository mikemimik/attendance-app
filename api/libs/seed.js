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

    });
  },
  _associate: function(context) {
    console.log('context', context);

  }
};

// TODO: check if bindAll needed now?
module.exports = _.bindAll(seed);