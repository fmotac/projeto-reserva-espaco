const Espaco = require('./Espaco');
const Reserva = require('./Reserva');
const Usuario = require('./Usuario');

const sequelize = require('../config/database'); // Conexão com o banco de dados


// Espaco.hasMany(Reserva);
// Reserva.belongsTo(Espaco);

// Usuario.hasMany(Reserva);
// Reserva.belongsTo(Usuario);

module.exports = {
  Espaco,
  Reserva,
  Usuario
};

// Sincronizar modelos com o banco de dados
sequelize.sync();
