// const db = require("../models");
// const { jurusan: Jurusan, kelas: Kelas, user: User } = db;
// const Op = db.Sequelize.Op;

// exports.getJurusan = async (req, res) => {
//     try {
//         let response;
//         if (req.role === "admin") {
//             response = await Jurusan.findAll({
//                 attributes: ['id', 'name_jurusan'],
//                 include: [
//                     {
//                         model: User,
//                         attributes: ['id', 'username', 'email'],
//                         as: "user"
//                     },
//                     {
//                         model: Kelas,
//                         attributes: ['id', 'name_kelas'],
//                         as: "kelas"
//                     }
//                 ]
//             });
//         } else {
//             response = await Jurusan.findAll({
//                 attributes: ['id', 'name_jurusan'],
//                 where: {
//                     userId: req.userId
//                 },
//                 include: [
//                     {
//                         model: User,
//                         attributes: ['id', 'username', 'email'],
//                         as: "user"
//                     },
//                     {
//                         model: Kelas,
//                         attributes: ['id', 'name_kelas'],
//                         as: "kelas"
//                     }
//                 ]
//             });
//         }
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// };

// exports.getJurusanById = async (req, res) => {
//     try {
//         const jurusan = await Jurusan.findOne({
//             where: {
//                 id: req.params.id
//             }
//         });
//         if (!jurusan) return res.status(404).json({ msg: "Data tidak ditemukan" });
//         let response;
//         if (req.role === "admin") {
//             response = await Jurusan.findOne({
//                 attributes: ['id', 'name_jurusan'],
//                 include: [
//                     {
//                         model: User,
//                         attributes: ['id', 'username', 'email'],
//                         as: "user"
//                     },
//                     {
//                         model: Kelas,
//                         attributes: ['id', 'name_kelas'],
//                         as: "kelas"
//                     }
//                 ]
//             });
//         } else {
//             response = await Jurusan.findAll({
//                 attributes: ['id', 'name_jurusan'],
//                 where: {
//                     [Op.and]: [{ id: jurusan.id }, { userId: req.userId }]
//                 },
//                 include: [
//                     {
//                         model: User,
//                         attributes: ['id', 'username', 'email'],
//                         as: "user"
//                     },
//                     {
//                         model: Kelas,
//                         attributes: ['id', 'name_kelas'],
//                         as: "kelas"
//                     }
//                 ]
//             });
//         }
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }

// exports.createJurusan = async (req, res) => {
//     const { name_jurusan } = req.body;
//     try {
//         await Jurusan.create({
//             name_jurusan: name_jurusan,
//             userId: req.userId
//         });
//         res.status(201).json({ msg: "Jurusan Created successfuly" });
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }

// exports.updateJurusan = async (req, res) => {
//     try {
//         const jurusan = await Jurusan.findOne({
//             where: {
//                 id: req.params.id
//             }
//         });
//         if (!jurusan) return res.status(404).json({ msg: "Data tidak ditemukan" });
//         const { name_jurusan } = req.body;
//         if (req.role === "admin") {
//             await Jurusan.update({ name_jurusan }, {
//                 where: {
//                     id: jurusan.id
//                 }
//             });
//         } else {
//             if (req.userId !== jurusan.userId) return res.status(403).json({ msg: "Hanya untuk admin" });
//             await Jurusan.update({ name_jurusan }, {
//                 where: {
//                     [Op.and]: [{ id: jurusan.id }, { userId: req.userId }]
//                 }
//             });
//         }
//         res.status(200).json({ msg: "Jurusan Updated successfuly" });
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }

// exports.deleteJurusan = async (req, res) => {
//     try {
//         const jurusan = await Jurusan.findOne({
//             where: {
//                 id: req.params.id
//             }
//         });
//         if (!jurusan) return res.status(404).json({ msg: "Data tidak ditemukan" });
//         const { name_jurusan } = req.body;
//         if (req.role === "admin") {
//             await Jurusan.destroy({
//                 where: {
//                     id: jurusan.id
//                 }
//             });
//         } else {
//             if (req.userId !== jurusan.userId) return res.status(403).json({ msg: "Hanya untuk admin" });
//             await Jurusan.destroy({
//                 where: {
//                     [Op.and]: [{ id: jurusan.id }, { userId: req.userId }]
//                 }
//             });
//         }
//         res.status(200).json({ msg: "Jurusan Deleted successfuly" });
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }

const db = require("../models");
const { jurusan: Jurusan, kelas: Kelas, user: User } = db;
const Op = db.Sequelize.Op;

exports.getJurusan = async (req, res) => {
    try {
        let response;
        response = await Jurusan.findAll({
            attributes: ['id', 'name_jurusan'],
            include: [
                {
                    model: Kelas,
                    attributes: ['id', 'name_kelas'],
                    as: "kelas"
                }
            ]
        }); res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.getJurusanById = async (req, res) => {
    try {
        const jurusan = await Jurusan.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!jurusan) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await Jurusan.findOne({
            attributes: ['id', 'name_jurusan'],
            where: {
                id: jurusan.id
            },
            include: [
                {
                    model: Kelas,
                    attributes: ['id', 'name_kelas'],
                    as: "kelas"
                }
            ]
        }); res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createJurusan = async (req, res) => {
    const { name_jurusan } = req.body;
    try {
        await Jurusan.create({
            name_jurusan: name_jurusan,
        });
        res.status(201).json({ msg: "Jurusan Created successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateJurusan = async (req, res) => {
    try {
        const jurusan = await Jurusan.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!jurusan) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { name_jurusan } = req.body;
        await Jurusan.update({ name_jurusan }, {
            where: {
                id: jurusan.id
            }
        }); res.status(200).json({ msg: "Jurusan Updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteJurusan = async (req, res) => {
    try {
        const jurusan = await Jurusan.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!jurusan) return res.status(404).json({ msg: "Data tidak ditemukan" });
        await Jurusan.destroy({
            where: {
                id: jurusan.id
            }
        });
        res.status(200).json({ msg: "Jurusan Deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}