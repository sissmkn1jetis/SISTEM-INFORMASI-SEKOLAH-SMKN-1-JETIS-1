import api from './api';

class GuruService {
  getGuru() {
    return api.get('/test/listguru');
  }
  getGuruById(id) {
    return api.get(`/test/listguru/${id}`);
  }
  createGuru(data) {
    return api.post("/test/listguru", data);
  }
  updateGuru(id, data) {
    return api.patch(`/test/listguru/${id}`, data);
  }
  deleteGuru(id) {
    return api.delete(`/test/listguru/${id}`);
  }
}

export default new GuruService();