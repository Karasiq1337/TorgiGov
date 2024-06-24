import React from "react";


export enum TorgiType{
    Rent = "Аренда",
    Sale = "Продажа",
}

export enum TorgiState{
    Published = "Опубликован",
    ApplicationAcceptance = "Прием заявок",
}


export enum PropertyType{
    AgriculturalLand = "Земли сельскохозяйственного назначения",
    SettlementsLands = "Земли населенных пунктов",
}

export enum PropertyForm{
    Gos= "Государственная собственность (неразграниченная)",
    RFSubject = "Собственность субъектов РФ",
    Other = "Муниципальная собственность",
}

export type SearchParam =  PropertyForm | PropertyType | TorgiState | TorgiType;

export interface SmartCheckboxProps{
    searchParam : SearchParam,
    dispatch : React.Dispatch<SearchParamsAction>,
    type : 'checkbox' | 'radio',
}
export interface SearchParamsAction{
    param : SearchParam,
    isAdd : boolean, 
}

export interface LotProps{
    Id : string | null,
    Type : TorgiType | null,
    Platform : string | null,
    Izveshenie : string | null,
    State : TorgiState | null,
    Link : string | null,
    StartDate : string | null,
    EndDate : string | null,
    RFSubject : string | null,
    Address : string | null,
    Deposit : number | null,
    AuctionStep : number | null,
    StartCost : number | null,
    PropertyType : PropertyType | null,
    Area : number | null,
    Rent : number | null,
    Vid : string | null,
    Kadastr : string | null,
}

export interface LotSearchParams{
    propertyType : Set<PropertyType>,
    propertyForm : Set<PropertyForm>,
    torgiState : Set<TorgiState>,
    torgiType :  Set<TorgiType>,
}
