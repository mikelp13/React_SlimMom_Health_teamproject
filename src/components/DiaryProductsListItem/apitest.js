import axios from 'axios';

const url = 'https://slimmom-backend.goit.global/';

axios.defaults.baseURL = url;

class PhonebookService {


    deleteEatenProduct(product) {
        return axios.delete(`/day`, { product });
    }

    getProducts(date) {
        return axios.post(`/day/info`, date);
    }

}

export default new PhonebookService();