const { authJwt } = require("../middleware");
const controller = require("../controllers/siswa.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/listsiswa",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getSiswa
    );

    app.get(
        "/api/test/listsiswa/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getSiswaById
    );

    // app.get(
    //     "/api/test/listsiswakelas/:kelasId",
    //     // [authJwt.verifyToken, authJwt.isAdmin],
    //     controller.getKelasSiswaById
    // );

    app.post(
        "/api/test/listsiswa",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.createSiswa
    );

    app.patch(
        "/api/test/listsiswa/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateSiswa
    );

    app.delete(
        "/api/test/listsiswa/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteSiswa
    );
};