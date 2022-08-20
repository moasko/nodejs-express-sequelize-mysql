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


//find on 
exports.findOne = (req, res) => {
    const id = req.params.id;

    Motos.findByPk(id)
        .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: "Not found moto with id " + id
            });
        }
        }).catch(err => {
        res.status(500).send({
            message: "Error retrieving moto with id=" + id
        });
        }
    );
    }


// Update a moto by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    Motos.update(req.body, {
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
                message: "moto was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update moto with id=${id}. Maybe moto was not found or req.body is empty!`
            });
        }
        }).catch(err => {
        res.status(500).send({
            message: "Error updating moto with id=" + id
        });
        }
    );
    }

    // Delete a moto with the specified id in the request
    exports.delete = (req, res) => {
        const id = req.params.id;

        Motos.destroy({
            where: { id: id }
        })
            .then(num => {
            if (num == 1) {
                res.send({
                    message: "moto was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete moto with id=${id}. Maybe moto was not found!`
                });
            }
            }).catch(err => {
            res.status(500).send({
                message: "Could not delete moto with id=" + id
            });
            }
        );
        }

// egt moto by code
exports.findByCode = (req, res) => {
    const code = req.params.code;

    Motos.findAll({ where: { code: code } })
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

//Search moto
exports.search = (req, res) => {
    const search = req.params.search;

    Motos.findAll({ where: { [Op.or]: [{ code: { [Op.like]: `%${search}%` } }, { model: { [Op.like]: `%${search}%` } }, { year: { [Op.like]: `%${search}%` } }, { description: { [Op.like]: `%${search}%` } }, { owner: { [Op.like]: `%${search}%` } }, { owner_phone: { [Op.like]: `%${search}%` } }] } })
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

    