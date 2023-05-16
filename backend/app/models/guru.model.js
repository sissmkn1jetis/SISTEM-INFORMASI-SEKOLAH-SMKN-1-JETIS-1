module.exports = (sequelize, Sequelize) => {
    const Guru = sequelize.define("gurus", {
        nip: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        bidang_studi: {
            type: Sequelize.STRING,
        },
        userId: {
            type: Sequelize.INTEGER,
        },
    });

    return Guru;
};