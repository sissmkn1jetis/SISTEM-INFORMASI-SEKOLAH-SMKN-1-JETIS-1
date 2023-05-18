const { authJwt } = require("../middleware");
const controller = require("../controllers/absensi.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/listabsensi",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getAbsensi
    );

    app.get(
        "/api/test/listabsensi/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getAbsensiById
    );

    app.post(
        "/api/test/listabsensi",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.createAbsensi
    );

    app.patch(
        "/api/test/listabsensi/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateAbsensi
    );

    app.delete(
        "/api/test/listabsensi/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteAbsensi
    );
};