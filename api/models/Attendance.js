module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Attendance', {
    attendanceId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};