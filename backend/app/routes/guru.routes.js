const { authJwt } = require("../middleware");
const controller = require("../controllers/guru.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/test/listguru",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.getGuru
  );

  app.get(
    "/api/test/listguru/:id",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.getGuruById
  );

  app.post(
    "/api/test/listguru",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.createGuru
  );

  app.patch(
    "/api/test/listguru/:id",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateGuru
  );

  app.delete(
    "/api/test/listguru/:id",
    // [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteGuru
  );
};