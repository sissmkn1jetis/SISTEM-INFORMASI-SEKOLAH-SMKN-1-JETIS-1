const db = require("../models");
const { thn_ajar: TahunAjar } = db;

exports.getTahunAjar = async (req, res) => {
    try {
        const response = await TahunAjar.findAll({
            attributes: ['id', 'semester_aktif', 'thn_ajaran'],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getTahunAjarById = async (req, res) => {
    try {
        const thn_ajar = await TahunAjar.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!thn_ajar) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await TahunAjar.findOne({
            attributes: ['id', 'semester_aktif', 'thn_ajaran'],
            where: {
                id: thn_ajar.id
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createTahunAjar = async (req, res) => {
    const { semester_aktif, thn_ajaran } = req.body;
    try {
        await TahunAjar.create({
            semester_aktif: semester_aktif,
            thn_ajaran: thn_ajaran,
        });
        res.status(201).json({ msg: "Tahun Ajaran Created" });
    } catch (error) {
        res.status(500).json({ msg: "Form dibawah tidak boleh kosong..." });
    }
}

exports.updateTahunAjar = async (req, res) => {
    try {
        await TahunAjar.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Tahun Ajaran Updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteTahunAjar = async (req, res) => {
    try {
        await TahunAjar.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Tahun Ajaran Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}