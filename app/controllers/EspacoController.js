const { Espaco } = require('../models');

module.exports = {
  async index(req, res) {
    const espacos = await Espaco.findAll();
    res.render('espacos/index', { espacos });
  },

  novo(req, res) {
    res.render('espacos/novo');
  },

  async criar(req, res) {
    const { Nome, Capacidade } = req.body;
    try {
      await Espaco.create({ Nome, Capacidade });
      res.redirect('/espacos');
    } catch (error) {
      console.error('Erro ao criar espaço:', error);
      res.render('espacos/novo', { error: 'Erro ao criar espaço' });
    }
  },

  async editar(req, res) {
    const { id } = req.params;
    const espaco = await Espaco.findByPk(id);
    res.render('espacos/editar', { espaco });
  },

  async atualizar(req, res) {
    const { id } = req.params;
    const { Nome, Capacidade } = req.body;

    try {
      const espaco = await Espaco.findByPk(id); // Buscar o espaço pelo ID

      if (!espaco) {
        return res.status(404).send('Espaço não encontrado');
      }

      await espaco.update({ Nome, Capacidade }); // Atualizar os dados do espaço encontrado
      res.redirect('/espacos');
    } catch (error) {
      console.error('Erro ao atualizar espaço:', error);
      res.redirect(`/espacos/${id}/editar`);
    }
  },

  async excluir(req, res) {
    const { id } = req.params;
    try {
      await Espaco.destroy({ where: { ID: id } });
      res.redirect('/espacos');
    } catch (error) {
      console.error('Erro ao excluir espaço:', error);
      res.redirect('/espacos');
    }
  }
};
