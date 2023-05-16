// const db = require("../models");
// const config = require("../config/auth.config");
// const { user: User, role: Role, refreshToken: RefreshToken } = db;

// const Op = db.Sequelize.Op;

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// exports.signup = async (req, res) => {
//   // Save User to Database
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
//               res.send({ message: "User registered successfully!" });
//             });
//           });
//         }
//         // else {
//         //   // user role = 1
//         //   user.setRoles([1]).then(() => {
//         //     res.send({ message: "User registered successfully!" });
//         //   });
//         // }
//       })
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

// exports.deleteUser = async (req, res) => {
//   try {
//     await User.destroy({
//       where: {
//         id: req.params.id
//       }
//     });
//     res.status(201).json({ msg: "User Deleted" });
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// }

// exports.signin = async (req, res) => {
//   try {
//     await User.findOne({
//       where: {
//         username: req.body.username
//       }
//     })
//       .then(async (user) => {
//         if (!user) {
//           return res.status(404).send({ message: "User Not found." });
//         }

//         const passwordIsValid = bcrypt.compareSync(
//           req.body.password,
//           user.password
//         );

//         if (!passwordIsValid) {
//           return res.status(401).send({
//             accessToken: null,
//             message: "Invalid Password!"
//           });
//         }

//         const token = jwt.sign({ id: user.id }, config.secret, {
//           expiresIn: config.jwtExpiration
//         });

//         let refreshToken = await RefreshToken.createToken(user);

//         let authorities = [];
//         user.getRoles().then(roles => {
//           for (let i = 0; i < roles.length; i++) {
//             authorities.push("ROLE_" + roles[i].name.toUpperCase());
//           }

//           res.status(200).send({
//             id: user.id,
//             username: user.username,
//             // password:user.password,
//             email: user.email,
//             roles: authorities,
//             accessToken: token,
//             refreshToken: refreshToken,
//           });
//         });
//       })
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

// exports.refreshToken = async (req, res) => {
//   const { refreshToken: requestToken } = req.body;

//   if (requestToken == null) {
//     return res.status(403).json({ message: "Refresh Token is required!" });
//   }

//   try {
//     let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });

//     console.log(refreshToken)

//     if (!refreshToken) {
//       res.status(403).json({ message: "Refresh token is not in database!" });
//       return;
//     }

//     if (RefreshToken.verifyExpiration(refreshToken)) {
//       RefreshToken.destroy({ where: { id: refreshToken.id } });

//       res.status(403).json({
//         message: "Refresh token was expired. Please make a new signin request",
//       });
//       return;
//     }

//     const user = await refreshToken.getUser();
//     let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
//       expiresIn: config.jwtExpiration,
//     });

//     return res.status(200).json({
//       accessToken: newAccessToken,
//       refreshToken: refreshToken.token,
//     });
//   } catch (err) {
//     return res.status(500).send({ message: err });
//   }
// };

const db = require("../models");
const config = require("../config/auth.config");
const { user: User, refreshToken: RefreshToken } = db;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  try {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      role: req.body.role
    })
    res.status(201).send({ message: "User was registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
    await User.findOne({
      where: {
        username: req.body.username
      },
    })
      .then(async user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }

        const token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: config.jwtExpiration
        });

        let refreshToken = await RefreshToken.createToken(user);

        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          // role: data,
          accessToken: token,
          refreshToken: refreshToken,
        });
      })
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });

    console.log(refreshToken)

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.destroy({ where: { id: refreshToken.id } });

      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }

    const user = await refreshToken.getUser();
    let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};