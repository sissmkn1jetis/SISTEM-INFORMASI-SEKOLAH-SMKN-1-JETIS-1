module.exports = (sequelize, Sequelize) => {
    const Jurnal_Harian = sequelize.define("jurnal_harian", {
        siswaId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        tgl_jurnal: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        jam_jurnal: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        isi_jurnal: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return Jurnal_Harian;
};