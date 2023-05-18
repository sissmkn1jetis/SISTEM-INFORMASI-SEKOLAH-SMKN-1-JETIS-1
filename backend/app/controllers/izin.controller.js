const db = require("../models");
const { izin: Izin, siswa: Siswa} = db;

exports.getIzin = async (req, res) => {
    try {
        const response = await Izin.findAll({
            attributes: ['id', 'siswaId', 'tgl_izin', 'deskripsi', 'foto'],
            include: [
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
};

exports.getIzinById = async (req, res) => {
    try {
        const jurnal = await Izin.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!jurnal) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await Izin.findOne({
            attributes: ['id', 'siswaId', 'tgl_izin', 'deskripsi', 'foto'],
            where: {
                id: jurnal.id
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createIzin = async (req, res) => {
    const { siswaId, tgl_izin, deskripsi, foto } = req.body;
    try {
        await Izin.create({
            siswaId: siswaId,
            tgl_izin: tgl_izin,
            deskripsi: deskripsi,
            foto: foto,
        });
        res.status(201).json({ msg: "Izin Created" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateIzin = async (req, res) => {
    try {
        await Izin.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Izin Updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteIzin = async (req, res) => {
    try {
        await Izin.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Izin Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}