import api from './api';

class NKService {
    getNK() {
        return api.get('/test/listnk');
    }
    getNKById(id) {
        return api.get(`/test/listnk/${id}`);
    }
    createNK(data) {
        return api.post("/test/listnk", data);
    }
    updateNK(id, data) {
        return api.patch(`/test/listnk/${id}`, data);
    }
    deleteNK(id) {
        return api.delete(`/test/listnk/${id}`);
    }
}

export default new NKService();