const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  return sequelize.define('Event', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: uuidv4,
    },
    title: DataTypes.STRING,
    dateTime: DataTypes.DATE,
    location: DataTypes.STRING,
    capacity: {
      type: DataTypes.INTEGER,
      validate: {
        max: 1000,
        min: 1,
      },
    },
  });
};