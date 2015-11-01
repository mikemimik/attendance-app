var Sequelize = require('sequelize');
var config = require('./config').database;

var sequelize = new Sequelize(config.name, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    idel: 10000
  },
  // INFO: silence sequelize
  // INFO: comment line to see output
  logging: function() {}
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};