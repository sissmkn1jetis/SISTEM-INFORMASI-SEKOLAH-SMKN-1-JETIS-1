const db = require("../models");
const { jurnal_harian: JurnalH, siswa: Siswa} = db;

exports.getJurnalH = async (req, res) => {
    try {
        const response = await JurnalH.findAll({
            attributes: ['id', 'siswaId', 'tgl_jurnal', 'jam_jurnal', 'isi_jurnal'],
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

exports.getJurnalHById = async (req, res) => {
    try {
        const jurnal = await JurnalH.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!jurnal) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await JurnalH.findOne({
            attributes: ['id', 'siswaId', 'tgl_jurnal', 'jam_jurnal', 'isi_jurnal'],
            where: {
                id: jurnal.id
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createJurnalH = async (req, res) => {
    const { siswaId, tgl_jurnal, jam_jurnal, isi_jurnal } = req.body;
    try {
        await JurnalH.create({
            siswaId: siswaId,
            tgl_jurnal: tgl_jurnal,
            jam_jurnal: jam_jurnal,
            isi_jurnal: isi_jurnal,
        });
        res.status(201).json({ msg: "Jurnal Created" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateJurnalH = async (req, res) => {
    try {
        await JurnalH.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Jurnal Updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteJurnalH = async (req, res) => {
    try {
        await JurnalH.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Jurnal Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}