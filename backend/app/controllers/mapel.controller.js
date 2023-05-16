const db = require("../models");
const { mapel: Mapel } = db;

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: Mapels } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, Mapels, totalPages, currentPage };
};

exports.getMapel = async (req, res) => {
    const { page, size, name_mapel } = req.query;
    var condition = name_mapel ? { name_mapel: { [Op.like]: `%${name_mapel}%` } } : null;

    const { limit, offset } = getPagination(page, size);
    try {
        const response = await Mapel.findAll({
            attributes: ['id', 'name_mapel'],
        });
        // await Mapel.findAndCountAll({
        //     where: condition, limit, offset,
        //     attributes: ['id', 'name_mapel'],
        // })
        //     .then(data => {
        //         const response = getPagingData(data, page, limit);
        //         res.send(response);
        //     })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.getMapelById = async (req, res) => {
    try {
        const mapel = await Mapel.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!mapel) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await Mapel.findOne({
            attributes: ['id', 'name_mapel'],
            where: {
                id: mapel.id
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createMapel = async (req, res) => {
    const { name_mapel } = req.body;
    try {
        await Mapel.create({
            name_mapel: name_mapel,
        });
        res.status(201).json({ msg: "Mata Pelajaran Created" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateMapel = async (req, res) => {
    try {
        await Mapel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Mata Pelajaran Updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteMapel = async (req, res) => {
    try {
        await Mapel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Mata Pelajaran Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}