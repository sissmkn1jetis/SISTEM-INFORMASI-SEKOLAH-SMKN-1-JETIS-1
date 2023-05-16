import api from './api';

class JurusanService {
    getJurusan() {
        return api.get('/test/listjurusan');
    }
    getJurusanById(id) {
        return api.get(`/test/listjurusan/${id}`);
    }
    createJurusan(data) {
        return api.post("/test/listjurusan", data);
    }
    updateJurusan(id, data) {
        return api.patch(`/test/listjurusan/${id}`, data);
    }
    deleteJurusan(id) {
        return api.delete(`/test/listjurusan/${id}`);
    }
}

export default new JurusanService();