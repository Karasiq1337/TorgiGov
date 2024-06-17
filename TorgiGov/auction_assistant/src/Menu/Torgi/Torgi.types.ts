import React from "react";


export enum TorgiType{
    Rent = "Rent",
    Sale = "Sale",
}

export enum TorgiState{
    Published = "Published",
    ApplicationAcceptance = "ApplicationAcceptance",
}


export enum PropertyType{
    AgriculturalLand = "AgriculturalLand",
    SettlementsLands = "SettlementsLands",
}

export enum PropertyForm{
    Gos= "Gos",
    RFSubject = "RFSubject",
    Other = "Other",
}

export type SearchParam =  PropertyForm | PropertyType | TorgiState;

export interface SmartCheckboxProps{
    searchParam : SearchParam,
    dispatch : React.Dispatch<SearchParamsAction>,
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
    StartDate : Date | null,
    EndDate : Date | null,
    RFSubject : string | null,
    Address : string | null,
    Deposit : number | null,
    AuctionStep : number | null,
    StartCost : number | null,
    PropertyType : PropertyType | null,
    Area : number | null,
}

export interface LotSearchParams{
    propertyType : Set<PropertyType>,
    propertyForm : Set<PropertyForm>,
    torgiState : Set<TorgiState>,
}
