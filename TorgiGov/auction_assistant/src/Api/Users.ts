import axios from "axios";


const API_URL = "http://localhost:5214/Users";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common = {
    'Access-Control-Allow-Origin' : '*',
}

const checkLoginRequest = (login : string) => {
    
    return axios<boolean>({
        method : 'post',
        url: `${API_URL}/checkLogin`,
        data: {login},
    })
}

export async function checkLogin(login : string){
    return await checkLoginRequest(login).then(data => data.data)
}

const regRequest = (login : string, password : string) => {

    return axios({
        method : 'post',
        url: `${API_URL}/create`,
        data: {login, password},
    })
}

const logInRequest = (login : string, password : string) => {

    return axios({
        method : 'post',
        url: `${API_URL}/login`,
        data: {login, password},
    })
}

export async function reg(login : string, password : string){
    const status = await regRequest(login, password).then(data => data.status)
    const balls = status === 200;
    return balls;
}

export async function login(login : string, password : string) {
    const res = await logInRequest(login, password).then(data => data.data)
        .catch(() => {return false;})
    return res;
}