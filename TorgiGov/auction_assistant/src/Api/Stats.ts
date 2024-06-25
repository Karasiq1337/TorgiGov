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

async function getStatsRequest() : Promise<object>{

    return axios<any>({
        method : 'get',
        url: `${API_URL}/get`,
    }).then(data => data.data)
}

export async function getStats() : Promise<Map<string, number>>{
    const resp = await getStatsRequest();
    const map = new Map(Object.entries(resp));
    return map
}
function* entries({obj}: { obj: any }) {
    for (let key in obj)
        yield [key, obj[key]];
}
