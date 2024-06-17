import axios from "axios";
import {LotProps, LotSearchParams, SearchParam} from "../Menu/Torgi/Torgi.types";

const API_URL = "http://localhost:5214/Torgi";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common = {
    'Access-Control-Allow-Origin' : '*',
} 

export async function getTorgi(id : string) : Promise<LotProps | null>{
    try {
        const res = await axios.get('', {params: {id: id}});
        console.log(res);
        return res.data;
    }
    catch (e){
        return null; 
    }
}

const getByParams = (params : LotSearchParams) => {
    const pt = Array.from(params.propertyType);
        
    return axios<LotProps>({
    method : 'post',
    url: `${API_URL}/GetByParams`,
    data: {
        PropertyType : Array.from(params.propertyType),
        TorgiState : Array.from(params.torgiState),
        PropertyForm : Array.from(params.propertyForm),
    }
})
}

export async function getTorgiByParams(params : LotSearchParams) : Promise<LotProps | null>{
   return await getByParams(params).then(data => data.data);
} 