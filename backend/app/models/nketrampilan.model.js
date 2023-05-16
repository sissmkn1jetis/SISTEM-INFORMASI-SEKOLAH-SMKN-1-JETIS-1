module.exports = (sequelize, Sequelize) => {
    const Nketrampilan = sequelize.define("nketrampilans", {
        guruId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        siswaId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        mapelId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        kelasId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        thnAjarId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        proses1: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proses2: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proses3: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proses4: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proses5: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proses6: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proses7: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proses8: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proyek1: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proyek2: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proyek3: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proyek4: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proyek5: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proyek6: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proyek7: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        proyek8: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        produk1: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        produk2: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        produk3: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        produk4: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        produk5: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        produk6: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        produk7: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        produk8: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },

        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    return Nketrampilan;
};