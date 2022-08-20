module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tricycles", {
        code: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        owner: {
            type: Sequelize.STRING
        },
        owner_phone: {
            type: Sequelize.STRING
        },
        mairie_id: {
            type: Sequelize.STRING
        },
    });

    return Tutorial;
};