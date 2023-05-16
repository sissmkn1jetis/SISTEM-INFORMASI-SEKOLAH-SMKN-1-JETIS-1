import api from './api';

class KelasService {
    getKelas() {
        return api.get('/test/listkelas');
    }
    getKelasById(id) {
        return api.get(`/test/listkelas/${id}`);
    }
    createKelas(data) {
        return api.post("/test/listkelas", data);
    }
    updateKelas(id, data) {
        return api.patch(`/test/listkelas/${id}`, data);
    }
    deleteKelas(id) {
        return api.delete(`/test/listkelas/${id}`);
    }
}

export default new KelasService();