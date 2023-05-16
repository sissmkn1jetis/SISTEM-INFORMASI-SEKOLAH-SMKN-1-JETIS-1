module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [3, 100]
      }
    },
    tempat_lahir: {
      type: Sequelize.STRING,
    },
    tanggal_lahir: {
      type: Sequelize.DATEONLY,
    },
    jenis_kelamin: {
      type: Sequelize.STRING,
    },
    agama: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.STRING,
    },
    almt_kel: {
      type: Sequelize.STRING,
    },
    almt_kec: {
      type: Sequelize.STRING,
    },
    almt_kab: {
      type: Sequelize.STRING,
    },
    almt_prov: {
      type: Sequelize.STRING,
    },
    no_telp: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  });

  return User;
};