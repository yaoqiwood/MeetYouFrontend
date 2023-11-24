import apiUtils from "@/utils/apiUtils";
import systemUtils from "@/utils/systemUtils";

const systemApi = {
    getUUIDToken: async (param) => {
        try {
            let tempToken = systemUtils.getTempToken()
            const headers = tempToken ? {TEMP_TOKEN_KEY: tempToken} : {}
            return await apiUtils.get('/api/open/generate-temp-token', param, headers)
        } catch (error) {
            return error
        }
    }
}

export default systemApi