const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Conexão com o banco de dados

const Reserva = sequelize.define('Reserva', {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Data: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  HoraInicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  HoraFim: {
    type: DataTypes.TIME,
    allowNull: false
  }
});

module.exports = Reserva;
