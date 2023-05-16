const db = require("../models");
const { kelas: Kelas, jurusan: Jurusan, siswa: Siswa } = db;

exports.getKelas = async (req, res) => {
    try {
        const response = await Kelas.findAll({
            attributes: ['id', 'name_kelas', 'jurusanId'],
            include: [
                {
                    model: Jurusan,
                    attributes: ['id', 'name_jurusan'],
                    as: "jurusan"
                },
                {
                    model: Siswa,
                    attributes: ['id', 'nis', 'name'],
                    as: "siswa",
                },

            ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getKelasById = async (req, res) => {
    try {
        const kelas = await Kelas.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!kelas) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await Kelas.findOne({
            attributes: ['id', 'name_kelas', 'jurusanId'],
            include: [
                {
                    model: Jurusan,
                    attributes: ['id', 'name_jurusan'],
                    as: "jurusan"
                },
            ],
            where: {
                id: kelas.id
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createKelas = async (req, res) => {
    const { name_kelas, jurusanId } = req.body;
    try {
        await Kelas.create({
            name_kelas: name_kelas,
            jurusanId: jurusanId,
        });
        res.status(201).json({ msg: "Kelas Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateKelas = async (req, res) => {
    try {
        const kelas = await Kelas.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!kelas) return res.status(404).json({ msg: "Data tidak ditemukan" });
        await Kelas.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Kelas Updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteKelas = async (req, res) => {
    try {
        await Kelas.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Kelas Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}