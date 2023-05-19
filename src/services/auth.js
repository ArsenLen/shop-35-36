import axios from "axios"

const URL_REGISTER = "https://whispering-river-87788.herokuapp.com/api/register"
const URL_LOGIN = "https://whispering-river-87788.herokuapp.com/api/login"

const register = (userInfo) => {
    return axios.post(URL_REGISTER, userInfo)
}

const login = (userInfo) => {
    return axios.post(URL_LOGIN, userInfo)
}

export default { register, login }