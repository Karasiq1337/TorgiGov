import React from "react";
import Form from "react-bootstrap/Form";
import {
    Col,
    Container,
    Dropdown,
    DropdownMenu,
    FormGroup, FormLabel,
    Row,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {LotProps, PropertyType, TorgiState, TorgiType} from "./Torgi.types";

export function Torgi() {
    const forms = ['Государственная (неразграниченная) собственность', 'Иная собственность', 'Собственность субъектов РФ']
    const type = ['Земли сельскохозяйственного назначения', 'Земли населенных пунктов']
    const count = 0;
    const lotProp : LotProps = {Area: 2, Address: "Мойхуй дом 3", Type: TorgiType.Rent, AuctionStep: 500, Deposit: 1000,
    Platform: "Калич.ру", State: TorgiState.Published, StartCost: 100, StartDate: new Date('12.02.2003'),
    EndDate: new Date('12.12.2012'), Link: 'arti.rus', PropertyType: PropertyType.AgriculturalLand,
        Izveshenie: '[eqqewqeqwe', RFSubject: "Рспублика пидорасов", Id: '228'}

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
                {DropDownButton(forms, "Форма собственности")}
                {DropDownButton(type, "Тип земельного участка")}
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

function DropDownButton(labels : string[], initialLabel : string){

    return(
        <Dropdown className={'mb-2'}>
            <Dropdown.Toggle className={"bg-light border-primary text-dark"} variant="success" id="dropdown-basic">
                {initialLabel}
            </Dropdown.Toggle>
            <DropdownMenu>
                {labels.map((l) => (
                    <Form.Check
                        className={'ms-2 me-2'}
                        type={'checkbox'}
                        label={l}
                    />))}
            </DropdownMenu>
        </Dropdown>
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
                            <Form.Label expand={"lg"} className={"bg-body-tertiary"}>
                                {CreateTitle(props)}
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
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            {CreateTitle(props)}
                        </Form.Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
        
    )
}