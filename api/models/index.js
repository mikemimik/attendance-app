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
model.Member.belongsTo(model.Group, { foreignKey: 'groupId' });
model.Group.hasMany(model.Member, {
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',
  foreignKey: 'groupId'
});

model.Member.belongsToMany(model.TrainingDay, {
  through: 'Schedule',
  foreignKey: 'memberId'
});
model.TrainingDay.belongsToMany(model.Member, {
  through: 'Schedule',
  foreignKey: 'trainingDayId'
});

model.Member.belongsToMany(model.Attendance, {
  as: 'Absents',
  through: 'MemberAttendance',
  foreignKey: 'memberId'
});
model.Attendance.belongsToMany(model.Member, {
  as: 'Absentees',
  through: 'MemberAttendance',
  foreignKey: 'attendanceId'
});

module.exports = model;