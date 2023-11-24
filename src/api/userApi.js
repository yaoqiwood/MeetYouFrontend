import apiUtils from "@/utils/apiUtils";
// import {TEMP_TOKEN_KEY} from "@/constants/systemConst";
import systemUtils from "@/utils/systemUtils";

const userApi = {
    async login(param) {
        let tempToken = systemUtils.getTempToken()
        const headers = tempToken ? {TEMP_TOKEN_KEY: tempToken} : {}
        return await apiUtils.post('/login', param, headers)
    }
}

export default userApi