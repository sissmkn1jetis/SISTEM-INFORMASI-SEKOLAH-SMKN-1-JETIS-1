module.exports = (sequelize, Sequelize) => {
    const Izin_Siswa = sequelize.define("izin", {
        siswaId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        tgl_izin: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        deskripsi: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        foto: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return Izin_Siswa;
};