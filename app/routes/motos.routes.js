module.exports = app => {
    const motos = require('../controllers/motos.controller.js');
    const routes = require("express").Router();

    // Create a new moto
    routes.post("/", motos.create);

    // Retrieve all motos
    routes.get("/", motos.findAll);

    app.use('/api/motos', routes);
}
