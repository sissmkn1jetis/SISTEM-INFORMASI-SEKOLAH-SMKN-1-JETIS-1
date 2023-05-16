import api from './api';

class SiswaService {
    getSiswa() {
        return api.get('/test/listsiswa');
    }
    getSiswaById(id) {
        return api.get(`/test/listsiswa/${id}`);
    }
    // getkelasSiswaById(kelasId) {
    //     return api.get(`/test/listsiswakelas/${kelasId}`);
    // }
    createSiswa(data) {
        return api.post("/test/listsiswa", data);
    }
    updateSiswa(id, data) {
        return api.patch(`/test/listsiswa/${id}`, data);
    }
    deleteSiswa(id) {
        return api.delete(`/test/listsiswa/${id}`);
    }
}

export default new SiswaService();