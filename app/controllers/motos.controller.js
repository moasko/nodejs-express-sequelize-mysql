const db = require('../models')


const Motos = db.motos 
const Op = db.Sequelize.Op


// Create and Save a new moto
exports.create = (req, res) => {
    // Validate request
    if (!req.body.code) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    
    // Create a moto
    const moto = {
        code: req.body.code,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        owner: req.body.owner,
        owner_phone: req.body.owner_phone,
        mairie_id: req.body.mairie_id
    };
    
    // Save moto in the database
    Motos.create(moto)
        .then(data => {
        res.send(data);
        }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the moto."
        });
        }
    );
    }

    // Retrieve all moto from the database.
    exports.findAll = (req, res) => {
        const code = req.query.code;
        var condition = code ? { code: { [Op.like]: `%${code}%` } } : null;
        
        Motos.findAll({ where: condition })
            .then(data => {
            res.send(data);
            }).catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving moto."
            });
            }
        );
    }