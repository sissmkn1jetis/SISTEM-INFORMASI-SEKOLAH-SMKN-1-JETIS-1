const { authJwt, verifySignUp } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  //   app.get(
  //     "/api/test/user",
  //     [authJwt.verifyToken],
  //     controller.User
  //   );

  app.get(
    "/api/test/guru",
    [authJwt.verifyToken, authJwt.isGuru],
    controller.Guru
  );

  app.get(
    "/api/test/walas",
    [authJwt.verifyToken, authJwt.isWalas],
    controller.Walas
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.Admin
  );

  app.get("/api/test/user", controller.getUser, authJwt.verifyToken, authJwt.isAdmin);
  // app.get("/api/test/userrole", controller.getRole, authJwt.verifyToken, authJwt.isAdmin);
  app.get("/api/test/user/:id", controller.getByIdUser, authJwt.verifyToken, authJwt.isAdmin);
  app.post(
    "/api/test/user", [
    verifySignUp.checkDuplicateUsernameOrEmail,
    // verifySignUp.checkRolesExisted
  ],
    controller.createUser, authJwt.verifyToken, authJwt.isAdmin,
  );
  app.put("/api/test/user/:id", controller.updateUser, [authJwt.verifyToken, authJwt.isAdmin]);
  app.delete("/api/test/user/:id", controller.deleteUser, authJwt.verifyToken, authJwt.isAdmin);
};