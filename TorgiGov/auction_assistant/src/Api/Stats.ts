import axios from "axios";

const API_URL = "http://localhost:5214/Stats";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common = {
    'Access-Control-Allow-Origin' : '*',
}

export async function incrementRequest(lotId : string): Promise<boolean>{

    return axios({
        method : 'post',
        url: `${API_URL}/increment`,
        data: {torgiId : lotId},
    }).then(data => data.status === 200)
}

export async function getStatsRequest() : Promise<number[]>{

    return axios<number[]>({
        method : 'get',
        url: `${API_URL}/get`,
    }).then(data => data.data )
}
