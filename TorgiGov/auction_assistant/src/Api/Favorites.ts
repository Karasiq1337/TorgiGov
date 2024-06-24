import axios from "axios";
import {mapToLotProps} from "./Torgi";
import {LotProps} from "../Menu/Torgi/Torgi.types";


const API_URL = "http://localhost:5214/Favorites";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common = {
    'Access-Control-Allow-Origin' : '*',
}

const addFavoriteRequest = (userLogin : string, lotId : string) => {

    return axios({
        method : 'post',
        url: `${API_URL}/add`,
        data: {userLogin, lotId},
    })
}

const delFavoriteRequest = (userLogin : string, lotId : string) => {

    return axios({
        method : 'post',
        url: `${API_URL}/delete`,
        data: {userLogin, lotId},
    })
}

const getFavoritesRequest = (userLogin : string) => {

    return axios<any[]>({
        method : 'post',
        url: `${API_URL}/get`,
        data: {login : userLogin},
    })
}

export async function getFavorites(login : string) : Promise<LotProps[]>{
    const resp = await getFavoritesRequest(login).then(data => data.data)
    const res = resp.map(p => mapToLotProps(p));
    return res;
}

export async function delFavorites(login : string, lotId : string) {
    const resp = await delFavoriteRequest(login, lotId).then(data => data.status === 200)
        .catch(() => {return false});
    return resp;
}

export async function addFavorites(login : string, lotId : string) {
    const resp = await addFavoriteRequest(login, lotId).then(data => data.status === 200)
        .catch(() => {return false});
    return resp;
}
