const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('eventdb', 'postgres', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = require('./user')(sequelize);
const Event = require('./event')(sequelize);
const Registration = require('./registration')(sequelize);

User.belongsToMany(Event, { through: Registration, foreignKey: 'userId' });
Event.belongsToMany(User, { through: Registration, foreignKey: 'eventId' });

module.exports = {
  sequelize,
  User,
  Event,
  Registration,
};