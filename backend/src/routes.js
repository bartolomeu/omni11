const express = require('express');
const ongController= require('./controller/ongController');
const incidentController= require('./controller/incidentController');
const profileController= require('./controller/profileController');
const sessionController= require('./controller/sessioncontroller');

const routes = express.Router();

routes.get('/ong', ongController.list);
routes.post('/ong', ongController.create);

routes.get('/incident', incidentController.list);
routes.post('/incident', incidentController.create);
routes.delete('/incident/:id', incidentController.delete);

routes.get('/profile', profileController.list);

routes.post('/session', sessionController.create);

module.exports = routes;