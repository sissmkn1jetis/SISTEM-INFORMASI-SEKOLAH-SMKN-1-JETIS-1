module.exports = (sequelize, Sequelize) => {
    const Kelas = sequelize.define("kelas", {
        name_kelas: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [3, 100]
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