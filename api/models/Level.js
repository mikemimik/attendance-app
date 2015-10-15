module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Level', {
    levelId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  });
};