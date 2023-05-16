const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
// const ROLES = db.ROLES;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(() => {
    if (req.role !== "admin") {
      next();
      return;
    }

    res.status(403).send({
      message: "Require Admin Role!"
    });
    return;
  });
};

isWalas = (req, res, next) => {
  User.findByPk(req.userId).then(() => {
    if (req.role !== "walas") {
      next();
      return;
    }

    res.status(403).send({
      message: "Require Walas Role!"
    });
    return;
  });
};

isGuru = (req, res, next) => {
  User.findByPk(req.userId).then(() => {
    if (req.role !== "guru") {
      next();
      return;
    }

    res.status(403).send({
      message: "Require Guru Role!"
    });
    return;
  });
};

// checkDuplicateUsernameOrEmail = (req, res, next) => {
//   // Username
//   User.findOne({
//     where: {
//       username: req.body.username
//     }
//   }).then(user => {
//     if (user) {
//       res.status(400).send({
//         message: "Failed! Username is already in use!"
//       });
//       return;
//     }

//     // Email
//     User.findOne({
//       where: {
//         email: req.body.email
//       }
//     }).then(user => {
//       if (user) {
//         res.status(400).send({
//           message: "Failed! Email is already in use!"
//         });
//         return;
//       }

//       next();
//     });
//   });
// };

// checkRolesExisted = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "admin") {
//           if (req.body.roles) {
//             for (let i = 0; i < req.body.roles.length; i++) {
//               if (!ROLES.includes(req.body.roles[i])) {
//                 res.status(400).send({
//                   message: "Failed! Role does not exist = " + req.body.roles[i]
//                 });
//                 return;
//               }
//             }
//           }
//           return;
//         }
//       }
//     });
//   });
//   next();
// };
// checkRolesExisted = (req, res, next) => {
//   if (req.body.roles) {
//     for (let i = 0; i < req.body.roles.length; i++) {
//       if (!ROLES === "admin".includes(req.body.roles[i])) {
//         res.status(400).send({
//           message: "Failed! Role does not exist = " + req.body.roles[i]
//         });
//         return;
//       }
//     }
//   }

//   next();
// };
// isModeratorOrAdmin = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "moderator") {
//           next();
//           return;
//         }

//         if (roles[i].name === "admin") {
//           next();
//           return;
//         }
//       }

//       res.status(403).send({
//         message: "Require Moderator or Admin Role!"
//       });
//     });
//   });
// };

const authJwt = {
  verifyToken: verifyToken,
  // checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  // checkRolesExisted: checkRolesExisted,
  isAdmin: isAdmin,
  isGuru: isGuru,
  isWalas: isWalas
};
module.exports = authJwt;