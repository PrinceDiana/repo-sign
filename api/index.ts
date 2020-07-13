import axios from 'axios';

export class ApiContractBatch {
    static queryBatchList(params) {
        return axios.get('/batchsign/query', { params });
    }
}