import axios from "axios";
import {
    LotProps,
    LotSearchParams,
    PropertyForm,
    PropertyType,
    SearchParam,
    TorgiState
} from "../Menu/Torgi/Torgi.types";

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

interface SearchRequestBody {
    PropertyType : Array<string>,
    TorgiState : Array<string>,
    PropertyForm : Array<string>,
    TorgiType : Array<string>,
}
const getByParams = (params : LotSearchParams) => {
    const body = mapToServerType(params);
    
    return axios<any[]>({
    method : 'post',
    url: `${API_URL}/GetByParams`,
    data: {TorgiState : body.TorgiState, PropertyType : body.PropertyType, 
        PropertyForm : body.PropertyForm, TorgiType : body.TorgiType},
    })
}

function mapToServerType(params : LotSearchParams) : SearchRequestBody{
    let propertyForm = Array.from(params.propertyForm);
    if (propertyForm.length === 0) 
        propertyForm = Object.values(PropertyForm);
    let propertyTypes = Array.from(params.propertyType);
    if (propertyTypes.length === 0)
        propertyTypes = Object.values(PropertyType);
    let torgiStates = Array.from(params.torgiState);
    if (torgiStates.length === 0)
        torgiStates = Object.values(TorgiState);
    let torgiType = Array.from(params.torgiType);
    if (torgiType.length === 0)
        torgiType = Object.values(torgiType);
    return { PropertyForm : propertyForm, PropertyType : propertyTypes, TorgiState : torgiStates, TorgiType : torgiType}
    
} 

function mapEnum(enums : Set<SearchParam>) : number[]{
    const torgiStates = Object.values(TorgiState);
    const propertyTypes = Object.values(PropertyType);
    const propertyForms = Object.values(PropertyForm);
    
    const res = new Array<number>;
    for (let e of enums){
        switch (e){
            case TorgiState.ApplicationAcceptance:
            case TorgiState.Published:
                res.push(torgiStates.indexOf(e));
                break;
            case PropertyType.AgriculturalLand:
            case PropertyType.SettlementsLands:
                res.push(propertyTypes.indexOf(e));
                break;
            case PropertyForm.Gos:
            case PropertyForm.Other:
            case PropertyForm.RFSubject:
                res.push(propertyForms.indexOf(e));
                break;
        }
    }
    return res;
}

export async function getTorgiByParams(params : LotSearchParams) : Promise<LotProps[] | null>{
    const maBalls = await getByParams(params)
        .then(data => data.data);
    const res = maBalls.map(p => mapToLotProps(p));
    return res;
}

function mapToLotProps(obj : any) : LotProps{
    const res : LotProps ={
        Address: obj.address, 
        Link : obj.link,
        Area : obj.area,
        AuctionStep : obj.auctionStep,
        EndDate : obj.endDate,
        StartCost : obj.startCost,
        State : obj.state,
        Platform : obj.platform,
        StartDate : obj.startDate,
        PropertyType : obj.propertyType,
        Type : obj.type,
        Deposit : obj.deposit,
        Id : obj.id,
        RFSubject : obj.rfSubject,
        Izveshenie : obj.izveshenie,
    }
    
    return res;
}