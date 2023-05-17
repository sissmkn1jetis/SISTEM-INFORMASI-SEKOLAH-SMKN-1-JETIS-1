const db = require("../models");
const { tempat_prakerin: TempatP} = db;

exports.getTempatP = async (req, res) => {
    try {
        const response = await TempatP.findAll({
            attributes: ['id', 'name_tempat', 'lokasi']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.getTempatPById = async (req, res) => {
    try {
        const tempat_pkl = await TempatP.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!tempat_pkl) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await TempatP.findOne({
            attributes: ['id', 'name_tempat', 'lokasi'],
            where: {
                id: tempat_pkl.id
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createTempatP = async (req, res) => {
    const { name_tempat, lokasi } = req.body;
    try {
        await TempatP.create({
            name_tempat: name_tempat,
            lokasi: lokasi,
        });
        res.status(201).json({ msg: "Tempat Prakerin Created" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateTempatP = async (req, res) => {
    try {
        await TempatP.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Tempat Prakerin Updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteTempatP = async (req, res) => {
    try {
        await TempatP.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Tempat Prakerin Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}