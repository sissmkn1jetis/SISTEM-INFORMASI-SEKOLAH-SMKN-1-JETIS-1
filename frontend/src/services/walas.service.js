import api from './api';

class WalasService {
    getWalas() {
        return api.get('/test/listwalas');
    }
    getWalasById(id) {
        return api.get(`/test/listwalas/${id}`);
    }
    createWalas(data) {
        return api.post("/test/listwalas", data);
    }
    updateWalas(id, data) {
        return api.patch(`/test/listwalas/${id}`, data);
    }
    deleteWalas(id) {
        return api.delete(`/test/listwalas/${id}`);
    }
}

export default new WalasService();