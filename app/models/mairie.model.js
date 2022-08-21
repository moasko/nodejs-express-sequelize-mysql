module.exports = (sequelize, Sequelize) => {
    const Mairie = sequelize.define("mairie", {
        name: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        code:{
            type: Sequelize.STRING
        }

    });
    return Mairie;
}