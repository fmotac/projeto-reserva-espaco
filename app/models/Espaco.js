// Modelo Espaco
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Conexão com o banco de dados

const Espaco = sequelize.define("Espaco", {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Capacidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Espaco;
