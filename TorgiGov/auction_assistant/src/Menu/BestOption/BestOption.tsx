import React from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, FormGroup, FormLabel, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function BestOption() {
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
                                <h4>Аренда земли населенных пунктов</h4>
                            </Form.Label>
                        </FormGroup>
                        <FormGroup className={'text-start mt-4'}>
                            <Form.Label expand={"lg"}
                                        className={"bg-body-tertiary d ms-5 text-primary"}>
                                <h3>{`Начальная цена: 103226 руб.`}</h3>
                            </Form.Label>
                        </FormGroup>
                    <FormGroup className={'text-start ms-5 mt-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            <h4>Вид разрешённого использования земельного участка : Для индивидуального жилищного строительства</h4>
                        </Form.Label>
                    </FormGroup>
                    <FormGroup className={'text-start ms-5 mt-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            <h4>Кадастровый номер земельного участка : 16:12:080801:374</h4>
                        </Form.Label>
                    </FormGroup>
                    <FormGroup className={'text-start ms-5 mt-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            <h4>Дата начала подачи заявок: 12.06.2024</h4>
                        </Form.Label>
                    </FormGroup>
                    <FormGroup className={'text-start ms-5 mt-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            <h4>Дата окончания подачи заявок: 11.07.2024</h4>
                        </Form.Label>
                    </FormGroup>
                    <FormGroup className={'text-start ms-5 mt-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            <h4>Субъект РФ: Республика Татарстан</h4>
                        </Form.Label>
                    </FormGroup>
                    <FormGroup className={'text-start ms-5 mt-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            <h4>Местоположение имущества: Респ Татарстан, м.р-н Балтасинский, с.п. Норминское, с Норма, ул. Равиля Фахрутдинова, з/у 32</h4>
                        </Form.Label>
                    </FormGroup>
                    <FormGroup className={'text-start ms-5 mt-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            <h4>Площадь: 1000  M<sup>2</sup></h4>
                        </Form.Label>
                    </FormGroup>
                    <FormGroup className={'text-start ms-5 mt-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary"}>
                            <h4>Срок аренды: 20 лет</h4>
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
                                <h3> <u>torgi.gov.ru</u></h3>
                            </Form.Label>
                        </FormGroup>
                        
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}
export default BestOption;