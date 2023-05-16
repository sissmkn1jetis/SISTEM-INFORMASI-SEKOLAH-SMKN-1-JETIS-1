const { authJwt } = require("../middleware");
const controller = require("../controllers/nk.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/test/listnk",
        [authJwt.verifyToken, authJwt.isGuru],
        controller.getNK
    );

    app.get(
        "/api/test/listnk/:id",
        [authJwt.verifyToken, authJwt.isGuru],
        controller.getNKById
    );

    app.post(
        "/api/test/listnk",
        [authJwt.verifyToken, authJwt.isGuru],
        controller.createNK
    );

    app.patch(
        "/api/test/listnk/:id",
        [authJwt.verifyToken, authJwt.isGuru],
        controller.updateNK
    );

    app.delete(
        "/api/test/listnk/:id",
        [authJwt.verifyToken, authJwt.isGuru],
        controller.deleteNK
    );
};