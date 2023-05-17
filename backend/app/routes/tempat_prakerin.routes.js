const { authJwt } = require("../middleware");
const controller = require("../controllers/tempat_prakerin.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/listtempatp",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getTempatP
    );

    app.get(
        "/api/test/listtempatp/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getTempatPById
    );

    app.post(
        "/api/test/listtempatp",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.createTempatP
    );

    app.patch(
        "/api/test/listtempatp/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateTempatP
    );

    app.delete(
        "/api/test/listtempatp/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteTempatP
    );
};