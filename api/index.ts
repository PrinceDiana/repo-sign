import axios from 'axios';

// 来自子仓库的提交111345
// 父仓库修改子模块
// 来自repo-weixin/feature/B的提交
export class ApiContractBatch {
    static queryBatchList(params) {
        return axios.get('/batchsign/query', { params });
    }
}