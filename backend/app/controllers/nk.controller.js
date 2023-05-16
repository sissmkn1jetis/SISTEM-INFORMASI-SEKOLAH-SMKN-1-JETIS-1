const db = require("../models");
const { guru: Guru, mapel: Mapel, nk: NK, siswa: Siswa, thn_ajar: TahunAjar, kelas: Kelas, user: User } = db;

exports.getNK = async (req, res) => {
    try {
        let response
        response = await NK.findAll({
            attributes: ['id', 'guruId', 'kelasId', 'thnAjarId', 'mapelId', 'siswaId', 'proses1', 'proses2', 'proses3', 'proses4', 'proses5', 'proses6', 'proses7', 'proses8', 'proyek1',
                'proyek2', 'proyek3', 'proyek4', 'proyek5', 'proyek6', 'proyek7', 'proyek8', 'produk1', 'produk2', 'produk3', 'produk4', 'produk5', 'produk6', 'produk7', 'produk8'],
            where: {
                userId: req.userId
            },
            include: [
                {
                    model: Guru,
                    attributes: ['id', 'name'],
                    as: "guru"
                },
                {
                    model: Mapel,
                    attributes: ['id', 'name_mapel'],
                    as: "mapel"
                },
                {
                    model: Siswa,
                    attributes: ['id', 'name'],
                    as: "siswa"
                },
                {
                    model: Kelas,
                    attributes: ['id', 'name_kelas'],
                    as: "kelas"
                },
                {
                    model: TahunAjar,
                    attributes: ['id', 'semester', 'semester_aktif', 'thn_ajaran'],
                    as: "thn_ajar"
                },
                {
                    model: User,
                    attributes: ['username', 'email'],
                    as: "user"
                },
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.getNKById = async (req, res) => {

    try {
        const ketrampilan = await NK.findOne({
            where: {
                id: req.params.id
            }
        });
        if (!ketrampilan) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        response = await NK.findOne({
            attributes: ['id', 'guruId', 'kelasId', 'thnAjarId', 'mapelId', 'siswaId', 'proses1', 'proses2', 'proses3', 'proses4', 'proses5', 'proses6', 'proses7', 'proses8', 'proyek1',
                'proyek2', 'proyek3', 'proyek4', 'proyek5', 'proyek6', 'proyek7', 'proyek8', 'produk1', 'produk2', 'produk3', 'produk4', 'produk5', 'produk6', 'produk7', 'produk8'],
            where: {
                id: ketrampilan.id
            },
            include: [
                {
                    model: Guru,
                    attributes: ['id', 'name'],
                    as: "guru"
                },
                {
                    model: Mapel,
                    attributes: ['id', 'name_mapel'],
                    as: "mapel"
                },
                {
                    model: Siswa,
                    attributes: ['id', 'name'],
                    as: "siswa"
                },
                {
                    model: Kelas,
                    attributes: ['id', 'name_kelas'],
                    as: "kelas"
                },
                {
                    model: TahunAjar,
                    attributes: ['id', 'semester', 'semester_aktif', 'thn_ajaran'],
                    as: "thn_ajar"
                },
                {
                    model: User,
                    attributes: ['username', 'email'],
                    as: "user"
                },
            ]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.createNK = async (req, res) => {
    const { kelasId, thnAjarId, mapelId, siswaId, guruId, proses1, proses2, proses3, proses4, proses5, proses6, proses7, proses8, proyek1, proyek2, proyek3, proyek4, proyek5, proyek6, proyek7, proyek8, produk1, produk2, produk3, produk4, produk5, produk6, produk7, produk8, } = req.body;
    const siswa = await NK.findOne({
        where: {
            siswaId: req.body.siswaId
        }
    });
    if (siswa) return res.status(404).json({ msg: 'Siswa Yang Anda Masukkan Sudah Tersedia...' });
    try {
        await NK.create({
            kelasId: kelasId,
            thnAjarId: thnAjarId,
            mapelId: mapelId,
            guruId: guruId,
            siswaId: siswaId,
            proses1: proses1,
            proses2: proses2,
            proses3: proses3,
            proses4: proses4,
            proses5: proses5,
            proses6: proses6,
            proses7: proses7,
            proses8: proses8,
            proyek1: proyek1,
            proyek2: proyek2,
            proyek3: proyek3,
            proyek4: proyek4,
            proyek5: proyek5,
            proyek6: proyek6,
            proyek7: proyek7,
            proyek8: proyek8,
            produk1: produk1,
            produk2: produk2,
            produk3: produk3,
            produk4: produk4,
            produk5: produk5,
            produk6: produk6,
            produk7: produk7,
            produk8: produk8,
            userId: req.userId
        });
        res.status(201).json({ msg: "Nilai Created" });
    } catch (error) {
        res.status(500).json({ msg: "Form dibawah tidak boleh kosong..." });
    }
}

exports.updateNK = async (req, res) => {
    try {
        await NK.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Nilai Ketrampilan Updated" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

exports.deleteNK = async (req, res) => {
    try {
        await NK.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json({ msg: "Nilai Deleted" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}