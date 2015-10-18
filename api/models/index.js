/**
 * Summary
 *
 * Create an object that will have each model as a key
 * and it's initialized sequelized self as the value.
 */
var fs = require('fs');
var path = require('path');
var database = require('../libs/db').sequelize;

var model = {};

fs.readdirSync(__dirname).forEach(function(file) {
  var splitFile = file.split('.');
  var modelPath = path.join(__dirname, file);
  if (splitFile[splitFile.length -1] === 'js' && splitFile[0] !== 'index') {
    model[splitFile[0]] = database.import(modelPath);
  }
});

// Association
model.Member.belongsToMany(model.Group, {
  through: 'GroupMember',
  foreignKey: 'memberId'
});
model.Group.belongsToMany(model.Member, {
  through: 'GroupMember',
  foreignKey: 'groupId'
});
model.Group.belongsToMany(model.TrainingDay, { through: 'Schedule' });
model.TrainingDay.belongsToMany(model.Group, { through: 'Schedule' });

module.exports = model;