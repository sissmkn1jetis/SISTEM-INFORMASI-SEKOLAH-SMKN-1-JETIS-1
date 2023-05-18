const { authJwt } = require("../middleware");
const controller = require("../controllers/izin.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/listizin",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getIzin
    );

    app.get(
        "/api/test/listizin/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getIzinById
    );

    app.post(
        "/api/test/listizin",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.createIzin
    );

    app.patch(
        "/api/test/listizin/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateIzin
    );

    app.delete(
        "/api/test/listizin/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteIzin
    );
};