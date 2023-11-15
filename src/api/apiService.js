// apiService.js
import axios from 'axios';
import cookieUtil from "@/utils/CookieUtil";

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL, // 使用环境变量作为基础 URL
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // 例如，设置内容类型
        // 其他全局头部
    }
    // 其他配置...
});

// 请求拦截器
apiClient.interceptors.request.use(
    config => {
        // 使用 cookieUtil 获取 token
        const token = cookieUtil.getCookie('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        // 请求错误处理
        return Promise.reject(error);
    }
);

export default apiClient;
