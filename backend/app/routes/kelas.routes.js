const { authJwt } = require("../middleware");
const controller = require("../controllers/kelas.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/listkelas",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getKelas
    );

    app.get(
        "/api/test/listkelas/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getKelasById
    );

    app.post(
        "/api/test/listkelas",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.createKelas
    );

    app.patch(
        "/api/test/listkelas/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateKelas
    );

    app.delete(
        "/api/test/listkelas/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteKelas
    );
};