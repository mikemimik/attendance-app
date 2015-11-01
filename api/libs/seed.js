var _ = require('lodash');
var async = require('async');
var fs = require('fs');

var db = require('./db');
var model = require('../models');
var seedfns = require('./seed-fns');

// TODO: create association function for all the models
var seed = {
  init: function() {
    console.log('seed', 'init', 'entry_point');
    async.seq(
      this._createModels,
      this._associateModels
    )(function(err, result) {
      console.log('seed', 'init', 'initialize', 'result', result);
    });
  },
  _createModels: function(callback) {
    console.log('seed', '_createModels', 'entry_point');
    async.parallel([
      seedfns.group.gen,
      seedfns.level,
      seedfns.trainingDay.gen,
      seedfns.member.gen,
      seedfns.attendance.gen
    ],
    function(err, results) {
      if (err) { throw err; }

      // INFO: create models object from nested results array
      var createdModels = {};
      _.map(results, function(outer_value, outer_key) {
        _.map(outer_value, function(inner_value, inner_key) {
          createdModels[inner_key] = inner_value;
        });
      });
      console.log('seed', '_createModels', 'callback', 'fire');
      callback(null, createdModels);
    });
  },
  _associateModels: function(models, callback) {
    console.log('seed', '_associateModels', 'entry_point');
    async.parallel([
      async.apply(seedfns.group.map, models),
      async.apply(seedfns.member.map, models),
      async.apply(seedfns.trainingDay.map, models),
      async.apply(seedfns.attendance.map, models)
    ],
    function(err, results) {
      if (err) { throw err; }
      console.log('seed', '_associateModels', 'parallel', 'finished');

      // INFO: results is array of callback results
      callback(null, results);
    });
  }
};

// TODO: check if bindAll needed now?
module.exports = _.bindAll(seed);
