module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Group', {
    groupId: {
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
  }, {
    timestamps: false
  });
};