module.exports = app => {
    const motos = require('../controllers/motos.controller.js');
    const routes = require("express").Router();

    // Create a new moto
    routes.post("/", motos.create);

    // Retrieve all motos
    routes.get("/", motos.findAll);

    // Retrieve a single moto with id
    routes.get("/:id", motos.findOne);

    // Update a moto with id
    routes.put("/:id", motos.update);

    // Delete a moto with id
    routes.delete("/:id", motos.delete);

    //find moto with code
    routes.get("/code/:code", motos.findByCode);

    //search moto 
    routes.get("/search/:search", motos.search);

    app.use('/api/motos', routes);
}
