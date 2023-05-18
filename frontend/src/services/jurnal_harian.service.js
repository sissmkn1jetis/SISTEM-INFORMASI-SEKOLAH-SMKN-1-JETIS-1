import api from './api';

class JurnalHService {
    getJurnalH() {
        return api.get('/test/listjurnal');
    }
    getJurnalHById(id) {
        return api.get(`/test/listjurnal/${id}`);
    }
    // getkelasSiswaById(kelasId) {
    //     return api.get(`/test/listsiswakelas/${kelasId}`);
    // }
    createJurnalH(data) {
        return api.post("/test/listjurnal", data);
    }
    updateJurnalH(id, data) {
        return api.patch(`/test/listjurnal/${id}`, data);
    }
    deleteJurnalH(id) {
        return api.delete(`/test/listjurnal/${id}`);
    }
}

export default new JurnalHService();