import api from './api';

class TempatPService {
    getTempatP() {
        return api.get('/test/listtempatp');
    }
    getTempatPById(id) {
        return api.get(`/test/listtempatp/${id}`);
    }
    createTempatP(data) {
        return api.post("/test/listtempatp", data);
    }
    updateTempatP(id, data) {
        return api.patch(`/test/listtempatp/${id}`, data);
    }
    deleteTempatP(id) {
        return api.delete(`/test/listtempatp/${id}`);
    }
}

export default new TempatPService();