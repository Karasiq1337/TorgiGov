import React, {FC, useReducer, useState} from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, Dropdown, DropdownMenu, FormGroup, Row,} from "react-bootstrap";
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

export function Torgi() {
    const propertyForms = Object.values(PropertyForm);
    const propertyType = Object.values(PropertyType);
    const torgiState = Object.values(TorgiState);
    
    const initialLotSearchParams : LotSearchParams = 
        {propertyForm: new Set<PropertyForm>,  propertyType: new Set<PropertyType>(), torgiState : new Set<TorgiState>()}
    const [lotsSearchParams, dispatchLotsSearchParams] = 
        useReducer(LotsSearchParamsReducer, initialLotSearchParams)

    const count = 0;
    
    const [checkedPropertyTypes, setPropertyTypes] = useState(new Set<PropertyType>);
    
    
    const lotProp : LotProps = {Area: 2, Address: "Мойхуй дом 3", Type: TorgiType.Rent, AuctionStep: 500, Deposit: 1000,
    Platform: "Калич.ру", State: TorgiState.Published, StartCost: 114124124, StartDate: new Date('12.02.2003'),
    EndDate: new Date('12.12.2012'), Link: 'arti.rus', PropertyType: PropertyType.AgriculturalLand,
        Izveshenie: '[eqqewqeqwe', RFSubject: "Рспублика пидорасов", Id: '228'}
    
    const [lotsProps, setProps] = useState() 
        
    return(
        <Form>
            <Container>
                <Row>
                    <Col>
                        <h1 className={"text-center"}>Вы тут</h1>
                        <Form.Label сlassName={"text-center"}>Здесь вы можете просмотреть лоты</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}></Form.Label>
                </Row>
                {DropDownButton(propertyForms, "Форма собственности", dispatchLotsSearchParams)}
                {DropDownButton(propertyType, "Тип земельного участка", dispatchLotsSearchParams)}
                <FormGroup>
                    <Form.Check type={'radio'} label={`Аренда`} name="group1"/>
                    <Form.Check type={'radio'} label={`Продажа`} name="group1"/>
                </FormGroup>
                <Row>
                    <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}></Form.Label>
                </Row>
                <Row>
                    <Col>
                        <Button>Найти</Button>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-end">
                    <Form.Label сlassName={"text-center"}>Найдено: {count} </Form.Label>
                </Row>
                <FormGroup>
                    <Lot{...lotProp}></Lot>
                </FormGroup>
            </Container>
        </Form>
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
            console.log(state.propertyForm)
            return state
        case PropertyType.AgriculturalLand:
        case PropertyType.SettlementsLands:
            if(isAdd)
                state.propertyType.add(param)
            else
                state.propertyType.delete(param)
            console.log(state.propertyType)
            return state
        case TorgiState.ApplicationAcceptance:
        case TorgiState.Published:
            if(isAdd)
                state.torgiState.add(param)
            else
                state.torgiState.delete(param)
            console.log(state.torgiState)
            return state
        default:
            return state;
    }
}

function DropDownButton(params : SearchParam[], initialLabel : string, changeFunk : React.Dispatch<SearchParamsAction>){
    
    return(
        <Dropdown className={'mb-2'}>
            <Dropdown.Toggle className={"bg-light border-primary text-dark"} variant="success" id="dropdown-basic">
                {initialLabel}
            </Dropdown.Toggle>
            <DropdownMenu>
                {params.map((l) => (
                    <SmartCheckBox searchParam={l} dispatch={changeFunk}/>
                    ))}
            </DropdownMenu>
        </Dropdown>
    )
}

const SmartCheckBox : FC<SmartCheckboxProps> = ({searchParam , dispatch}) =>{
    let isChecked = false;
    
    return(
        <Form.Check
            className={'ms-2 me-2'}
            type={'checkbox'}
            label={searchParam.toString()}
            onChange={() => {
                isChecked = !isChecked;
                dispatch({param: searchParam, isAdd: isChecked});
            }}
        />  
    )
}

function CreateTitle(props : LotProps) : string{
    const type = props.Type == TorgiType.Rent ? "Аренда" : "Продажа";
    const propertyType = props.PropertyType == PropertyType.AgriculturalLand ? "сельскохозяйственного назначения" 
        : "начелённых пунктов";
    const address = props.Address != null ? `по адресу ${props.Address}` : '';
    
    return `${type} земель ${propertyType} ${address}` 
        
}

const Lot = ( props : LotProps) =>{
    return(
        <Form className={"text-center border border-primary bg-body-tertiary "}>
                <Row>
                    <Col>
                        <FormGroup className={'text-start ms-5 mt-3'}>
                           <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                               <h4>{CreateTitle(props)}</h4>
                           </Form.Label>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className={'text-start mt-4'}>
                            <Form.Label expand={"lg"} 
                                        className={"bg-body-tertiary d-flex justify-content-end me-5 text-primary"}>
                                <h3>{`Начальная цена: ${props.StartCost} руб.`}</h3>
                            </Form.Label>
                        </FormGroup>
                    </Col>
                </Row>
            <Row>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 mb-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            Площадь: {props.Area}  M <sup>2</sup>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start  mb-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary d-flex justify-content-end me-5"}>
                            {props.Link}
                        </Form.Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
        
    )
}