module.exports = app => {
    const mairie = require('../controllers/mairie.controller.js');
    var router = require("express").Router();

    // Create a new mairie
    router.post("/", mairie.create);

    // Retrieve all mairie
    router.get("/", mairie.findAll);
    
    // Retrieve a single mairie with id
    router.get("/:id", mairie.findOne);
    
    // Update a mairie with id
    router.put("/:id", mairie.update);
    
    // Delete a mairie with id
    router.delete("/:id", mairie.delete);
    
    // Delete all mairie
    router.delete("/", mairie.deleteAll);
    
    //find mairie with code
    router.get("/code/:code", mairie.findByCode);
    
    //search mairie 
    router.get("/search/:search", mairie.search);
    
    app.use('/api/mairie', router);
}
//