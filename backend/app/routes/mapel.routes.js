const { authJwt } = require("../middleware");
const controller = require("../controllers/mapel.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/listmapel",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getMapel
    );

    app.get(
        "/api/test/listmapel/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getMapelById
    );

    app.post(
        "/api/test/listmapel",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.createMapel
    );

    app.patch(
        "/api/test/listmapel/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateMapel
    );

    app.delete(
        "/api/test/listmapel/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteMapel
    );
};