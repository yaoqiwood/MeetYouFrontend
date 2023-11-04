// apiService.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL // 使用环境变量作为基础 URL
    // 其他配置...
});

export default apiClient;
