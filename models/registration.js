const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Registration', {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    eventId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
  });
};