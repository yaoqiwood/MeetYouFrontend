import apiUtils from "@/utils/apiUtils";
import systemUtils from "@/utils/systemUtils";

const userApi = {
    async login(param) {
        let tempToken = systemUtils.getTempToken()
        const headers = tempToken ? {TEMP_TOKEN_KEY: tempToken} : {}
        return await apiUtils.post('/login', param, headers)
    },
    async getChatCha() {
        let tempToken = systemUtils.getTempToken()
        const headers = tempToken ? {TEMP_TOKEN_KEY: tempToken} : {}
        console.log(headers)
        return await apiUtils.getImg('/getCaptcha?' + new Date().getTime(), headers)
    }
}

export default userApi