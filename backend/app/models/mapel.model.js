module.exports = (sequelize, Sequelize) => {
    const Mapel = sequelize.define("mapels", {
        name_mapel: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [3, 100]
            }
        },
    });

    return Mapel;
};