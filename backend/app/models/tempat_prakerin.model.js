module.exports = (sequelize, Sequelize) => {
    const Tempat_Prakerin = sequelize.define("tempat_prakerin", {
        name_tempat: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [3, 100]
            }
        },
        lokasi: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    });

    return Tempat_Prakerin;
};