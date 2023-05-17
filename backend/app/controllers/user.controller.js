// const db = require("../models");
// const { user: User, role: Role } = db;

// const Op = db.Sequelize.Op;
// const bcrypt = require("bcryptjs");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

// exports.User = (req, res) => {
//     res.status(200).send("User Content.");
//   };

exports.Walas = (req, res) => {
  res.status(200).send("Walas Content.");
};

exports.Admin = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.Guru = (req, res) => {
  res.status(200).send("Guru Content.");
};

exports.Kabeng = (req, res) => {
  res.status(200).send("Kabeng Content.");
};

// exports.getroles = async (req, res) => {
//   try {
//     const response = await Role.findAll({
//       attributes: ['id', 'name'],
//     });
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

// exports.getUser = async (req, res) => {
//   try {
//     const response = await User.findAll({
//       attributes: ['id', 'username', 'email'],
//       include: [
//         {
//           model: Role,
//           attributes: ['id', 'name']
//         }
//       ]
//     });
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

// exports.getByIdUser = async (req, res) => {
//   try {
//     const users = await User.findOne({
//       where: {
//         id: req.params.id
//       }
//     });
//     if (!users) return res.status(404).json({ msg: "User tidak ditemukan" });

//     const response = await User.findOne({
//       attributes: ['id', 'username', 'email', 'password'],
//       include: [
//         {
//           model: Role,
//           attributes: ['id', 'name']
//         }
//       ],
//       where: {
//         id: req.params.id
//       }
//     });
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

// exports.createUser = async (req, res) => {
//   try {
//     const { password, confPassword, username, email } = req.body;
//     if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
//     const hashPassword = bcrypt.hashSync(password, 8);
//     await User.create({
//       username: username,
//       email: email,
//       password: hashPassword,
//     })
//       .then(user => {
//         if (req.body.roles) {
//           Role.findAll({
//             attributes: ['id', 'name'],
//             where: {
//               name: {
//                 [Op.or]: req.body.roles
//               }
//             }
//           }).then(roles => {
//             user.setRoles(roles).then(() => {
//               res.send({ message: "User create successfully!" });
//             });
//           });
//         }
//       })
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

// exports.updateUser = async (req, res) => {
//   try {
//     const users = await User.findOne({
//       where: {
//         id: req.params.id
//       }
//     });
//     if (!users) return res.status(404).json({ msg: "User tidak ditemukan" });
//     const { username, email, password, confPassword, roles } = req.body;
//     let hashPassword;
//     if (password === "" || password === null) {
//       hashPassword = users.password
//     } else {
//       hashPassword = bcrypt.hashSync(password, 8);
//     }
//     if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
//     if (roles) {
//       Role.findAll({
//         where: {
//           name: {
//             [Op.or]: roles
//           }
//         }
//       })
//         .then(roles => {
//           users.setRoles(roles).then(() => {
//             res.send({ message: "User updated successfully!" });
//           });
//         });
//     }
//     await User.update({
//       username: username,
//       email: email,
//       password: hashPassword,
//       roles: roles
//     }, {
//       where: {
//         id: users.id
//       },
//     });
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

// exports.deleteUser = async (req, res) => {
//   try {
//     const users = await User.findOne({
//       where: {
//         id: req.params.id
//       }
//     });
//     if (!users) return res.status(404).json({ msg: "User tidak ditemukan" });

//     const response = await User.destroy({
//       where: {
//         id: req.params.id
//       }
//     });
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };


const db = require("../models");
const { user: User, guru: Guru } = db;
const bcrypt = require("bcryptjs");

exports.getUser = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ['id', 'username', 'email', 'role', 'tempat_lahir', 'tanggal_lahir', 'jenis_kelamin', 'agama',
        'alamat', 'almt_kel', 'almt_kec', 'almt_kab', 'almt_prov', 'no_telp'],
      include: [
        {
          model: Guru,
          attributes: ['id', 'nip', 'bidang_studi', 'userId'],
        }
      ]
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getByIdUser = async (req, res) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!users) return res.status(404).json({ message: "User tidak ditemukan" });

    const response = await User.findOne({
      attributes: ['id', 'username', 'email', 'role', 'tempat_lahir', 'tanggal_lahir', 'jenis_kelamin', 'agama',
        'alamat', 'almt_kel', 'almt_kec', 'almt_kab', 'almt_prov', 'no_telp'],
      include: [
        {
          model: Guru,
          attributes: ['id', 'nip', 'bidang_studi', 'userId'],
        }
      ],
      where: {
        id: users.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { password, confPassword, username, email, role, tempat_lahir, tanggal_lahir, jenis_kelamin, agama,
      alamat, almt_kel, almt_kec, almt_kab, almt_prov, no_telp } = req.body;
    if (password !== confPassword) return res.status(400).json({ message: "Password dan Confirm Password tidak cocok" });
    const hashPassword = bcrypt.hashSync(password, 8);
    await User.create({
      username: username,
      email: email,
      password: hashPassword,
      role: role,
      tempat_lahir: tempat_lahir,
      tanggal_lahir: tanggal_lahir,
      jenis_kelamin: jenis_kelamin,
      agama: agama,
      alamat: alamat,
      almt_kel: almt_kel,
      almt_kec: almt_kec,
      almt_kab: almt_kab,
      almt_prov: almt_prov,
      no_telp: no_telp
    });
    res.status(201).send({ message: "User was registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!users) return res.status(404).json({ message: "User tidak ditemukan" });
    const { password, confPassword, username, email, role, tempat_lahir, tanggal_lahir, jenis_kelamin, agama,
      alamat, almt_kel, almt_kec, almt_kab, almt_prov, no_telp } = req.body;
    let hashPassword;
    if (password === "" || password === null) {
      hashPassword = users.password
    } else {
      hashPassword = bcrypt.hashSync(password, 8);
    }
    if (password !== confPassword) return res.status(400).json({ message: "Password dan Confirm Password tidak cocok" });
    await User.update({
      username: username,
      email: email,
      password: hashPassword,
      role: role,
      tempat_lahir: tempat_lahir,
      tanggal_lahir: tanggal_lahir,
      jenis_kelamin: jenis_kelamin,
      agama: agama,
      alamat: alamat,
      almt_kel: almt_kel,
      almt_kec: almt_kec,
      almt_kab: almt_kab,
      almt_prov: almt_prov,
      no_telp: no_telp
    }, {
      where: {
        id: users.id
      },
    })
    res.status(201).send({ message: "User was Updated successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const users = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!users) return res.status(404).send({ message: "User tidak ditemukan" });

    const response = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send({ message: "User was Deleted successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// exports.getRole = async (req, res) => {
//   try {
//     const response = await Role.findAll({
//       attributes: ['id', 'name'],
//     });
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };