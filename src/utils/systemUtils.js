import CookieUtil from "@/utils/CookieUtil";
import {TEMP_TOKEN_KEY, TOKEN_KEY} from '@/constants/systemConst'

const systemUtils = {
    isTempTokenExist() {
        return CookieUtil.isCookieExist(TEMP_TOKEN_KEY)
    },
    setTempToken(value) {
        CookieUtil.setCookie(TEMP_TOKEN_KEY, value)
    },
    getTempToken() {
        return CookieUtil.getCookie(TEMP_TOKEN_KEY)
    },
    setToken(value) {
        CookieUtil.setCookie(TOKEN_KEY, value)
    }
}

export default systemUtils