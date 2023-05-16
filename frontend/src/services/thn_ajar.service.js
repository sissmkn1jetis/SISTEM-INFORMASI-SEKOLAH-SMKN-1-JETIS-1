
import api from './api';

class TahunAjarService {
    getTahunAjar() {
        return api.get('/test/listthnajar');
    }
    getTahunAjarById(id) {
        return api.get(`/test/listthnajar/${id}`);
    }
    createTahunAjar(data) {
        return api.post("/test/listthnajar", data);
    }
    updateTahunAjar(id, data) {
        return api.patch(`/test/listthnajar/${id}`, data);
    }
    deleteTahunAjar(id) {
        return api.delete(`/test/listthnajar/${id}`);
    }
}

export default new TahunAjarService();