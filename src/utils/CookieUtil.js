// cookieUtil.js

import Cookies from 'js-cookie'

const cookieUtil = {
    // 设置 cookie
    setCookie(name, value, options) {
        Cookies.set(name, value, {...options, secure: true, sameSite: 'Strict'})
    },

    // 获取 cookie
    getCookie(name) {
        return Cookies.get(name)
    },

    // 删除 cookie
    removeCookie(name, options) {
        Cookies.remove(name, options)
    },

    // 获取所有 cookie
    getAllCookies() {
        return Cookies.get()
    }
}

export default cookieUtil
