const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Conexão com o banco de dados

const Usuario = sequelize.define('Usuario', {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    unique: true
  }
});

module.exports = Usuario;
