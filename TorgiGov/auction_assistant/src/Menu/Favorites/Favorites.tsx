import React from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, FormGroup, FormLabel, Row} from "react-bootstrap";
import Lot from "../Torgi/Torgi";
import Button from "react-bootstrap/Button";


export function Favorites() {
    return (
        <Form>
            <Container>
                <Row>
                <blockquote className="blockquote">
                    <h1 className={'text-center mt-5'}>Избранное</h1>
                    <footer className="blockquote-footer text-center mt-2">Здесь хранятся выбранные вами лоты
                    </footer>
                </blockquote>
                </Row>
                <Row>
                    <h3>Аренда</h3>
                    <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}></Form.Label>
                    <Form className={"text-center border border-primary bg-body-tertiary "}>
                        <Row>
                            <Col>
                                <FormGroup className={'text-start ms-5 mt-3'}>
                                    <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                        <h4>Аренда земельного участка сельскохозяйственного назначения</h4>
                                    </Form.Label>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className={'text-start mt-4'}>
                                    <Form.Label expand={"lg"}
                                                className={"bg-body-tertiary d-flex justify-content-end me-5 text-primary"}>
                                        <h3>{`Начальная цена: 103226 руб.`}</h3>
                                    </Form.Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup className={'text-start ms-5 mt-3 mb-3'}>
                                    <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                        Площадь: 1000  M<sup>2</sup>
                                    </Form.Label>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className={'text-start  mb-3'}>
                                    <Form.Label expand={"lg"} className={" bg-body-tertiary d-flex justify-content-end me-5 text-info"}>
                                        <u>torgi.gov.ru</u>
                                    </Form.Label>
                                </FormGroup>
                                <FormLabel className={'d-flex justify-content-end me-3'}>
                                    <Button href={'/BestOption'}>Добавить в избранное</Button>
                                </FormLabel>
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row>
                    <Form className={"text-center border border-primary bg-body-tertiary "}>
                        <Row>
                            <Col>
                                <FormGroup className={'text-start ms-5 mt-3'}>
                                    <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                        <h4>Аренда земельного участка сельскохозяйственного назначения</h4>
                                    </Form.Label>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className={'text-start mt-4'}>
                                    <Form.Label expand={"lg"}
                                                className={"bg-body-tertiary d-flex justify-content-end me-5 text-primary"}>
                                        <h3>{`Начальная цена: 120010 руб.`}</h3>
                                    </Form.Label>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup className={'text-start ms-5 mt-3 mb-3'}>
                                    <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                                        Площадь: 920  M<sup>2</sup>
                                    </Form.Label>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className={'text-start  mb-3'}>
                                    <Form.Label expand={"lg"} className={" bg-body-tertiary d-flex justify-content-end me-5 text-info"}>
                                        <u>torgi.gov.ru</u>
                                    </Form.Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row>
                    <h3>Продажа</h3>
                    <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}></Form.Label>
                </Row>
            </Container>
        </Form>
    )
}