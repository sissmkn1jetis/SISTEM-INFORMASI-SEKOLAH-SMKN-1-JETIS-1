const db = require("../models");
const { siswa: Siswa, kelas: Kelas, tempat_prakerin: tempatp } = db;
//tempatp = tempatprakerin

exports.getSiswa = async (req, res) => {
    try {
        let response;
        response = await Siswa.findAll({
            attributes: ['id', 'nis', 'name', 'tgl_lahir', 'jks', 'alamat', 'kelasId', 'tempat_pklId'],
            include: [{
                model: Kelas,
                attributes: ['id', 'name_kelas'],
                as: "kelas"
            },
            {
                model: tempatp,
                attributes: ['id', 'name_tempat'],
                as: "tempat_prakerin"
            },
        ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
exports.getSiswaById = async (req, res) => {
    try {
        const siswa = await Siswa.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!siswa) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await Siswa.findOne({
            attributes: ['id', 'nis', 'name', 'tgl_lahir', 'jks', 'alamat', 'kelasId', 'tempat_pklId'],
            where: {
                id: siswa.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// exports.getKelasSiswaById = async (req, res) => {
//     try {
//         const siswa = await Siswa.findOne({
//             where: {
//                 kelasId: req.params.kelasId
//             }
//         });
//         if (!siswa) return res.status(404).json({ msg: "Data tidak ditemukan" });
//         let response;
//         response = await Siswa.findAll({
//             attributes: ['id', 'nis', 'name', 'tgl_lahir', 'jks', 'alamat', 'kelasId'],
//             where: {
//                 kelasId: siswa.kelasId
//             }
//         });
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// }

exports.createSiswa = async (req, res) => {
    const { nis, name, tgl_lahir, jks, alamat, kelasId, tempat_pklId } = req.body;
    const nisSiswa = await Siswa.findOne({
        where: {
            nis: req.body.nis
        }
    });
    if (nisSiswa) return res.status(404).json({ msg: 'NIS Yang Anda Masukkan Sudah Tersedia...' });
    try {
        await Siswa.create({
            nis: nis,
            name: name,
            tgl_lahir: tgl_lahir,
            jks: jks,
            alamat: alamat,
            kelasId: kelasId,
            tempat_pklId: tempat_pklId,
        });
        res.status(201).json({ msg: "Siswa Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateSiswa = async (req, res) => {
    try {
        const siswa = await Siswa.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!siswa) return res.status(404).json({ msg: "Data tidak ditemukan" });
        await Siswa.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Siswa Updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteSiswa = async (req, res) => {
    try {
        await Siswa.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Siswa Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}