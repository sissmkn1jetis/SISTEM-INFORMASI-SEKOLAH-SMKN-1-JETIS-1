const { authJwt } = require("../middleware");
const controller = require("../controllers/walas.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/listwalas",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getWalas
    );

    app.get(
        "/api/test/listwalas/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getWalasById
    );

    app.post(
        "/api/test/listwalas",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.createWalas
    );

    app.patch(
        "/api/test/listwalas/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateWalas
    );

    app.delete(
        "/api/test/listwalas/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteWalas
    );
};