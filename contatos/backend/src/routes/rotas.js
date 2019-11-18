const express = require('express');
const routes = express.Router();

const ContatoController = require('../controllers/ContatoController');

routes.get('/contatos', ContatoController.index);
routes.get('/contatos/:id', ContatoController.show);

routes.post('/contatos', ContatoController.store);

routes.put('/contatos/:id', ContatoController.update);

routes.delete('/contatos/:id', ContatoController.destroy);

module.exports = routes;