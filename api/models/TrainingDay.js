module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TrainingDay', {
    trainingDayId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    weekday: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    timestamps: false
  });
};