import React from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, FormGroup, FormLabel, FormText, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";



export function CompareLotsRent()  {
    
    return (
        <Form>
            <Container>
                <Row>
                    <blockquote className="blockquote">
                        <h1 className={'text-center mt-5'}>Сравнение лотов</h1>
                        <footer className="blockquote-footer text-center mt-2">Здесь вы можете сравнить ваши лоты, вид торгов - Аренда
                        </footer>
                    </blockquote>
                </Row>
                <Row>
                    <h4>Аренда</h4>
                    <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}></Form.Label>
                </Row>
                <Row>
                    <Lots></Lots>
                    <Lotss></Lotss>
                </Row>
                <Row>
                    <h3 className={'mt-5 text-center'}>Анализ характеристик</h3>
                </Row>
                <Row>
                    <Property></Property>
                </Row>
                <Row>
                    <Propertyy></Propertyy>
                </Row>
                <Row>
                    <Button className={'mb-5'} type={"submit"}>Сравнить</Button>
                </Row>
            </Container>
        </Form>
    )
}

const Property = () => {
    return (
        <Form className={"text-center border border-primary bg-body-tertiary mt-2 mb-3"}>
            <Row>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>Размер задатка: 20300 руб.</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>{`Начальная цена: 103226 руб.`}</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>Площадь: 1700  M<sup>2</sup></h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>Срок аренды (лет) : 20 лет</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

const Propertyy = () => {
    return (
        <Form className={"text-center border border-primary bg-body-tertiary mt-2 mb-3"}>
            <Row>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>Размер задатка: 10020 руб.</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>{`Начальная цена: 120010 руб.`}</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>Площадь: 920  M<sup>2</sup></h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>Срок аренды (лет) : 15 лет</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

const Lots = () => {
    return (
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
                            Площадь: 1700  M<sup>2</sup>
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
    )
}

const Lotss = () => {
    return (
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
    )
}
export default CompareLotsRent();

