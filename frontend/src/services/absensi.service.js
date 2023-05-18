import api from './api';

class AbsensiService {
    getAbsensi() {
        return api.get('/test/listabsensi');
    }
    getAbsensiById(id) {
        return api.get(`/test/listabsensi/${id}`);
    }
    // getkelasSiswaById(kelasId) {
    //     return api.get(`/test/listsiswakelas/${kelasId}`);
    // }
    createAbsensi(data) {
        return api.post("/test/listabsensi", data);
    }
    updateAbsensi(id, data) {
        return api.patch(`/test/listabsensi/${id}`, data);
    }
    deleteAbsensi(id) {
        return api.delete(`/test/listabsensi/${id}`);
    }
}

export default new AbsensiService();