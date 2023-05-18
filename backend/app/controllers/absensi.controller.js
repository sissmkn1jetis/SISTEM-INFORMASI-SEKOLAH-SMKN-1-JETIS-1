const db = require("../models");
const { siswa: Siswa, absensi: Absensi } = db;

exports.getAbsensi = async (req, res) => {
    try {
        let response;
        response = await Absensi.findAll({
            attributes: ['id', 'siswaId', 'lokasi_masuk', 'lokasi_pulang', 'tgl_absen', 'jm_masuk', 'jm_pulang', 'keterangan', 'foto'],
            include: [{
                model: Siswa,
                attributes: ['id', 'name'],
                as: "siswa"
            },
        ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
exports.getAbsensiById = async (req, res) => {
    try {
        const absen = await Absensi.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!absen) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await Absensi.findOne({
            attributes: ['id', 'siswaId', 'lokasi_masuk', 'lokasi_pulang', 'tgl_absen', 'jm_masuk', 'jm_pulang', 'keterangan', 'foto'],
            where: {
                id: absen.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createAbsensi = async (req, res) => {
    const { siswaId, lokasi_masuk, lokasi_pulang, tgl_absen, jm_masuk, jm_pulang, keterangan, foto } = req.body;
    try {
        await Absensi.create({
            siswaId: siswaId,
            lokasi_masuk: lokasi_masuk,
            lokasi_pulang: lokasi_pulang,
            tgl_absen: tgl_absen,
            jm_masuk: jm_masuk,
            jm_pulang: jm_pulang,
            keterangan: keterangan,
            foto: foto,
        });
        res.status(201).json({ msg: "Absensi Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateAbsensi = async (req, res) => {
    try {
        const siswa = await Absensi.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!siswa) return res.status(404).json({ msg: "Data tidak ditemukan" });
        await Absensi.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Absensi Updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteAbsensi = async (req, res) => {
    try {
        await Absensi.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Absensi Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}