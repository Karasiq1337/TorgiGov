import React, {createContext, FC, useContext, useEffect, useReducer, useState} from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, Dropdown, DropdownMenu, FormGroup, FormLabel, Row,} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
    LotProps,
    LotSearchParams,
    PropertyForm,
    PropertyType,
    SearchParam,
    SearchParamsAction,
    SmartCheckboxProps,
    TorgiState,
    TorgiType
} from "./Torgi.types";
import {getTorgiByParams} from "../../Api/Torgi";
import {LotList} from "./Lots";

const TorgiContext = createContext<LotSearchParams>(
    {
    propertyForm: new Set<PropertyForm>(),
    propertyType: new Set<PropertyType>(),
    torgiState : new Set<TorgiState>(), 
    torgiType : new Set<TorgiType>(),
    })

const useTorgiContext = () => useContext(TorgiContext);

function RentRadio(dispatch : React.Dispatch<SearchParamsAction>) {
    return <FormGroup>
        <SmartCheckBox type={'checkbox'} searchParam={TorgiType.Rent} dispatch={dispatch}/>
        <SmartCheckBox type={'checkbox'} searchParam={TorgiType.Sale} dispatch={dispatch}/>
    </FormGroup>;
}

export function Torgi() {
    const propertyForms = Object.values(PropertyForm);
    const propertyType = Object.values(PropertyType);
    const torgiState = Object.values(TorgiState);
    
    const initialLotSearchParams : LotSearchParams = 
        {propertyForm: new Set<PropertyForm>(), 
            propertyType: new Set<PropertyType>(),
            torgiState : new Set<TorgiState>(),
            torgiType : new Set<TorgiType>()}    
    const [lotsSearchParams, dispatchLotsSearchParams] = 
        useReducer(LotsSearchParamsReducer, initialLotSearchParams)
    const [lotsProps, setProps] = useState<LotProps[]>(new Array<LotProps>)
    const [count, setCount] = useState<number | null>(0);
    
    async function handleSetLotsProps(){
        const props = await getTorgiByParams(lotsSearchParams);
        setCount(props && props.length);
        setProps(props);
    }
    
    return(
        <TorgiContext.Provider value={lotsSearchParams}>
            <Form>
                <Container>
                    <Row>
                        <Col>
                            <h1 className={"text-center mt-4"}>Список лотов</h1>
                            <Form.Label сlassName={"text-center"}>Выберите параметры поиска</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label expand={"lg"}
                                    className={"text-center border border-primary bg-body-tertiary"}></Form.Label>
                    </Row>
                   
                        {DropDownButton(propertyForms, "Форма собственности", dispatchLotsSearchParams)}
                        {DropDownButton(propertyType, "Тип земельного участка", dispatchLotsSearchParams)}
                        {DropDownButton(torgiState, "Состояние торгов", dispatchLotsSearchParams)}
                    
                    {RentRadio(dispatchLotsSearchParams)}
                    <Row>
                        <Form.Label expand={"lg"}
                                    className={"text-center border border-primary bg-body-tertiary"}></Form.Label>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={() => handleSetLotsProps()}>Найти</Button>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-end">
                        <Form.Label сlassName={"text-center"}>Найдено: {!!count ? count : 0} </Form.Label>
                    </Row>
                    <FormGroup>
                        <LotList props={lotsProps}/>
                    </FormGroup>
                </Container>
            </Form>
        </TorgiContext.Provider>
    )
}

function LotsSearchParamsReducer(state : LotSearchParams, action: SearchParamsAction) : LotSearchParams{
    const {param, isAdd} = action;
    switch (param) {
        case PropertyForm.RFSubject:
        case PropertyForm.Gos:
        case PropertyForm.Other:
            if(isAdd)
                state.propertyForm.add(param)
            else 
                state.propertyForm.delete(param)
            return state
        case PropertyType.AgriculturalLand:
        case PropertyType.SettlementsLands:
            if(isAdd)
                state.propertyType.add(param)
            else
                state.propertyType.delete(param)
            return state
        case TorgiState.ApplicationAcceptance:
        case TorgiState.Published:
            if(isAdd)
                state.torgiState.add(param)
            else
                state.torgiState.delete(param)
            return state
        case TorgiType.Sale:
        case TorgiType.Rent:
            if(isAdd)
                state.torgiType.add(param)
            else
                state.torgiType.delete(param)
            console.log(state);
            return state
        default:
            return state;
    }
}

function DropDownButton(params : SearchParam[], initialLabel : string, changeFunk : React.Dispatch<SearchParamsAction>){
    
    return(
        <Dropdown className={'mb-2'}>
            <Dropdown.Toggle className={"bg-light border-primary text-dark mt-2"} variant="success" id="dropdown-basic">
                {initialLabel}
            </Dropdown.Toggle>
            <DropdownMenu>
                {params.map((l) => (
                    <SmartCheckBox searchParam={l} dispatch={changeFunk} type={'checkbox'}/>
                    ))}
            </DropdownMenu>
        </Dropdown>
    )
}

const SmartCheckBox : FC<SmartCheckboxProps> = ({searchParam , dispatch, type}) =>{
    const context = useTorgiContext();
    const isChecked = () => {
        switch (searchParam){   
            case PropertyForm.RFSubject:
            case PropertyForm.Gos:
            case PropertyForm.Other:
                return context.propertyForm.has(searchParam);
            case PropertyType.AgriculturalLand:
            case PropertyType.SettlementsLands:
                return context.propertyType.has(searchParam);
            case TorgiState.ApplicationAcceptance:
            case TorgiState.Published:
                return context.torgiState.has(searchParam);
            case TorgiType.Sale:
            case TorgiType.Rent:
                return context.torgiType.has(searchParam);
            default:
                return false;
        }
    };
    
    return(
        <Form.Check
            className={'ms-2 me-2'}
            type={type}
            label={searchParam.toString()}
            defaultChecked={isChecked()}
            onChange={() => {
                dispatch({param: searchParam, isAdd: !isChecked()});
            }}
        />  
    )
}
