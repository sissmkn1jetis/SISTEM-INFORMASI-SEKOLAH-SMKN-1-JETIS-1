const db = require("../models");
const { guru: Guru, user: User } = db;

exports.getGuru = async (req, res) => {
    try {
        const response = await Guru.findAll({
            attributes: ['id', 'nip', 'bidang_studi', 'userId'],
            include: [
                {
                    model: User,
                    attributes: ['id', 'username', 'email', 'role', 'tempat_lahir', 'tanggal_lahir', 'jenis_kelamin', 'agama',
                        'alamat', 'almt_kel', 'almt_kec', 'almt_kab', 'almt_prov', 'no_telp'],
                    as: "user"
                }

            ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.getGuruById = async (req, res) => {
    try {
        const guru = await Guru.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!guru) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await Guru.findOne({
            attributes: ['id', 'nip', 'bidang_studi', 'userId'],
            where: {
                id: guru.id
            },
            include: [
                {
                    model: User,
                    attributes: ['id', 'username', 'email', 'role', 'tempat_lahir', 'tanggal_lahir', 'jenis_kelamin', 'agama',
                        'alamat', 'almt_kel', 'almt_kec', 'almt_kab', 'almt_prov', 'no_telp'],
                    as: "user"
                }
            ],
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createGuru = async (req, res) => {
    const { nip, bidang_studi, userId } = req.body;
    const nipGuru = await Guru.findOne({
        where: {
            nip: req.body.nip
        }
    });
    if (nipGuru) return res.status(404).json({ msg: 'NIP Yang Anda Masukkan Sudah Tersedia...' });
    const user = await Guru.findOne({
        where: {
            userId: req.body.userId
        }
    });
    if (user) return res.status(404).send({ msg: 'User Sudah Terdaftar...' });
    try {
        await Guru.create({
            nip: nip,
            bidang_studi: bidang_studi,
            userId: userId,
        });
        res.status(201).json({ msg: "Guru Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.updateGuru = async (req, res) => {
    const { nip, bidang_studi, userId } = req.body;
    const gurus = await Guru.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!gurus) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const nipGuru = await Guru.findOne({
        where: {
            nip: req.body.nip
        }
    });
    if (nipGuru) return res.status(404).json({ msg: 'NIP Yang Anda Masukkan Sudah Tersedia...' });
    const user = await Guru.findOne({
        where: {
            userId: req.body.userId
        }
    });
    if (user) return res.status(404).send({ msg: 'User yang anda ubah Sudah Terdaftar...' });
    try {
        await Guru.update({
            nip: nip,
            bidang_studi: bidang_studi,
            userId: userId,
        }, {
            where: {
                id: gurus.id
            }
        });
        res.status(201).json({ msg: "Guru Updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteGuru = async (req, res) => {
    const guru = await Guru.findOne({
        where: {
            id: req.params.id
        }
    });
    try {
        await Guru.destroy({
            where: {
                id: guru.id
            }
        });
        res.status(201).json({ msg: "Guru Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}