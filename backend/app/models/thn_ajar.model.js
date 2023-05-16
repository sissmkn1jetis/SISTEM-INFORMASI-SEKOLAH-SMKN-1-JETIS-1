module.exports = (sequelize, Sequelize) => {
    const TahunAjar = sequelize.define("thn_ajars", {
        semester_aktif: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [3, 100]
            }
        },
        thn_ajaran: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [3, 100]
            }
        },
    });

    return TahunAjar;
};