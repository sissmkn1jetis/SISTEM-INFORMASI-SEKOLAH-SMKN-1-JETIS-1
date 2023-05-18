import api from './api';

class IzinService {
    getIzin() {
        return api.get('/test/listizin');
    }
    getIzinById(id) {
        return api.get(`/test/listizin/${id}`);
    }
    // getkelasSiswaById(kelasId) {
    //     return api.get(`/test/listsiswakelas/${kelasId}`);
    // }
    createIzin(data) {
        return api.post("/test/listizin", data);
    }
    updateIzin(id, data) {
        return api.patch(`/test/listizin/${id}`, data);
    }
    deleteIzin(id) {
        return api.delete(`/test/listizin/${id}`);
    }
}

export default new IzinService();