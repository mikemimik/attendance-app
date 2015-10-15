module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Member', {
    memberId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};