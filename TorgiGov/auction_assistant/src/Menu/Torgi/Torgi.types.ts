

export enum TorgiType{
    Rent = 0,
    Sale = 1,
}

export enum TorgiState{
    Published,
    ApplicationAcceptance,
}

export enum PropertyType{
    AgriculturalLand,
    SettlementsLands,
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
