module.exports = (sequelize, Sequelize) => {
    const Kelas = sequelize.define("kelas", {
        name_kelas: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        jurusanId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return Kelas;
};