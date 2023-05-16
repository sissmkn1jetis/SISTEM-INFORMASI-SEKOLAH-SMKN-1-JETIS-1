const { authJwt } = require("../middleware");
const controller = require("../controllers/jurusan.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/listjurusan",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getJurusan
    );

    app.get(
        "/api/test/listjurusan/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getJurusanById
    );

    app.post(
        "/api/test/listjurusan",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.createJurusan
    );

    app.patch(
        "/api/test/listjurusan/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateJurusan
    );

    app.delete(
        "/api/test/listjurusan/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteJurusan
    );
};