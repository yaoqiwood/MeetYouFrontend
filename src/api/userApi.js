import apiUtils from "@/utils/apiUtils";

const userApi = {
    login: (param) => {
        apiUtils.post('/login', param,).then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }
}

export default userApi