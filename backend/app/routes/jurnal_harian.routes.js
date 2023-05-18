const { authJwt } = require("../middleware");
const controller = require("../controllers/jurnal_harian.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/listjurnal",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getJurnalH
    );

    app.get(
        "/api/test/listjurnal/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.getJurnalHById
    );

    app.post(
        "/api/test/listjurnal",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.createJurnalH
    );

    app.patch(
        "/api/test/listjurnal/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateJurnalH
    );

    app.delete(
        "/api/test/listjurnal/:id",
        // [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteJurnalH
    );
};