import React, {FC} from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, FormGroup, FormLabel, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {LotList} from "../Torgi/Lots";
import {LotProps, PropertyType} from "../Torgi/Torgi.types";
import {useAppSelector} from "../../AppHooks";


export const BestOptionProperty  = () => {
    const props = useAppSelector((state) => state.reducer.props.BestOption);
    const BestOption = () => {
        return (
             <Form>
                <Container>
                    <Row>
                        <blockquote className="blockquote">
                            <h1 className={'text-center mt-5'}>Оптимальный вариант</h1>
                            <footer className="blockquote-footer text-center mt-2">
                            </footer>
                        </blockquote>
                    </Row>
                    <Row>
                        <FormGroup className={'text-start ms-5 mt-3'}>
                            <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                <h3>{props.Type}</h3>
                            </Form.Label>
                        </FormGroup>
                        <FormGroup className={'text-start mt-4'}>
                            <Form.Label expand={"lg"}
                                        className={"bg-body-tertiary d ms-5 text-primary"}>
                                <h3>`Начальная цена:` {props.StartCost}</h3>
                            </Form.Label>
                        </FormGroup>
                        <FormGroup className={'text-start ms-5 mt-3'}>
                            <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                <h4>Вид разрешённого использования земельного участка : {props.Vid}</h4>
                            </Form.Label>
                        </FormGroup>
                        <FormGroup className={'text-start ms-5 mt-3'}>
                            <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                <h4>Кадастровый номер земельного участка : </h4>
                            </Form.Label>
                        </FormGroup>
                        <FormGroup className={'text-start ms-5 mt-3'}>
                            <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                <>Дата начала подачи заявок: {props.StartDate}</>
                            </Form.Label>
                        </FormGroup>
                        <FormGroup className={'text-start ms-5 mt-3'}>
                            <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                <>Дата окончания подачи заявок: {props.EndDate}</>
                            </Form.Label>
                        </FormGroup>
                        <FormGroup className={'text-start ms-5 mt-3'}>
                            <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                <h4>Субъект РФ: {props.RFSubject}</h4>
                            </Form.Label>
                        </FormGroup>
                        <FormGroup className={'text-start ms-5 mt-3'}>
                            <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                <h4>Местоположение имущества: {props.Address}</h4>
                            </Form.Label>
                        </FormGroup>
                        <FormGroup className={'text-start ms-5 mt-3'}>
                            <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                <h4>Площадь: {props.Area} M<sup>2</sup></h4>
                            </Form.Label>
                        </FormGroup>
                        <FormGroup className={'text-start ms-5 mt-3'}>
                            <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                <h4>Срок аренды: {props.Rent}</h4>
                            </Form.Label>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <FormGroup className={'text-start  mb-3'}>
                                <FormLabel><h3>Ссылка на извещение:</h3></FormLabel>
                                <Form.Label expand={"lg"} className={" bg-body-tertiary ms-5 text-info"}>
                                    <h3><u>{props.Link}</u></h3>
                                </Form.Label>
                            </FormGroup>
                        </Col>
                    </Row>
                </Container>
            </Form>
        )
    }
        return (
            if (!!props) {
                    <BestOption>
            }
        )
    }
    
 


