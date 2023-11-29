// apiUtils.js
import apiClient from '@/api/apiService';

const apiUtils = {
    /**
     * 发送 GET 请求
     * @param {string} url 请求的 URL
     * @param {object} params 请求的查询参数
     * @returns {Promise} Promise 对象
     */
    get(url, cumstomHeader = {}) {
        return apiClient.get(url, {headers: cumstomHeader})
            .then(response => response.data)
            .catch(error => {
                // 处理错误
                console.error('GET 请求错误:', error);
                throw error;
            });
    },
    getImg(url, cumstomHeader = {}) {
        return apiClient.get(url, {
            headers: cumstomHeader,
            responseType: 'arraybuffer'
        })
            .then(response => response.data)
            .catch(error => {
                // 处理错误
                console.error('GET 请求错误:', error);
                throw error;
            });
    },


    /**
     * 发送 POST 请求
     * @param {string} url 请求的 URL
     * @param {object} data 请求的主体数据
     * @returns {Promise} Promise 对象
     */
    post(url, data = {}, customHeader = {}) {
        return apiClient.post(url, data, {headers: customHeader})
            .then(response => response.data)
            .catch(error => {
                // 处理错误
                // console.error('POST 请求错误:', error);
                throw error;
            });
    }
};

export default apiUtils;
