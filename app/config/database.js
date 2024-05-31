const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('reserva_espaco', 'postgres', '120202', {
  host: 'localhost',
  dialect: 'postgres' // ou 'mysql', 'sqlite', etc.
});

module.exports = sequelize;
