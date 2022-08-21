const db = require('../models')

const Op = db.Sequelize.Op

const Mairie = db.mairie

// Create and Save a new moto
exports.create = (req, res) => {
    // Validate request
    if (!req.body.code) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    
    // Create a mairie
    const mairie = {
        name : req.body.name,
        phone : req.body.phone,
        email : req.body.email,
        password : req.body.password,
        code : req.body.code
    };

    // Save mairie in the database
    Mairie.create(mairie)
        .then(data => {
        res.send(data);
        }
    ).catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the mairie."
        });
        }
    );
    }


    // Retrieve all mairie from the database.
    exports.findAll = (req, res) => {
        const code = req.query.code;
        var condition = code ? { code: { [Op.like]: `%${code}%` } } : null;
        
        Mairie.findAll({ where: condition })
            .then(data => {
            res.send(data);
            }).catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving mairie."
            });
            }
        );
    }


    //find on
    exports.findByCode = (req, res) => {
        const code = req.params.code;
        var condition = code ? { code: { [Op.like]: `%${code}%` } } : null;
        
        Mairie.findAll({ where: condition })
            .then(data => {
            res.send(data);
            }).catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving mairie."
            });
            }
        );
    }

  // find one mairie by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Mairie.findByPk(id)
        .then(data => {
        res.send(data);
        }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving mairie."
        });
        }
    );
}



    // Update a mairie by the id in the request
    exports.update = (req, res) => {
        const id = req.params.id;
        
        Mairie.update(req.body, {
            where: { id: id }
        })
            .then(num => {
            if (num == 1) {
                res.send({
                message: "mairie was updated successfully."
                });
            } else {
                res.send({
                message: `Cannot update mairie with id=${id}. Maybe mairie was not found or req.body is empty!`
                });
            }
            }).catch(err => {
            res.status(500).send({
                message: "Error updating mairie with id=" + id
            });
            }
        );
    }


    // Delete a mairie with the specified id in the request
    exports.delete = (req, res) => {
        const id = req.params.id;
        
        Mairie.destroy({
            where: { id: id }
        })
            .then(num => {
            if (num == 1) {
                res.send({
                message: "mairie was deleted successfully!"
                });
            } else {
                res.send({
                message: `Cannot delete mairie with id=${id}. Maybe mairie was not found!`
                });
            }
            }).catch(err => {
            res.status(500).send({
                message: "Could not delete mairie with id=" + id
            });
            }
        );
    }

    // Delete all mairie from the database.
    exports.deleteAll = (req, res) => {
        Mairie.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
            res.send({ message: `${nums} mairie were deleted successfully!` });
            }).catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while removing all motos."
            });
            }
        );
    }

// search mairie
exports.search = (req, res) => {
    const search = req.params.search;
    var condition = search ? { code: { [Op.like]: `%${search}%` } } : null;
    
    Mairie.findAll({ where: condition })
        .then(data => {
        res.send(data);
        }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving mairie."
        });
        }
    );
}
