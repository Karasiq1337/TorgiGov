import React, {FC} from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, FormGroup, FormLabel, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {LotProps, TorgiType} from "../Torgi/Torgi.types";
import {useAppSelector} from "../../AppHooks";
import {Link} from "@radix-ui/themes";


export const BestOptionProperty : FC = () => {
    const bestOption = useAppSelector((state) => state.reducer.props.BestOption);
    const BestOption : FC<{props : LotProps}> = ({props}) => {
        return (
            <Form>
                <Container>
                    <Row>
                        <blockquote className="blockquote">
                            <h1 className={'text-center mt-5'}>Оптимальный вариант</h1>
                            <footer className="blockquote-footer text-center mt-2">Переходите по ссылке на извещение для участия в аукционе 
                            </footer>
                        </blockquote>
                    </Row>
                    <Row>
                        <ListGroup className={'text-start mt-3'}>
                            <ListGroupItem className={"bg-body-tertiary border-primary text-center"}>
                                <h3>{props.Type} земельного участка</h3>
                            </ListGroupItem>
                            <ListGroupItem className={"bg-body-tertiary border-primary"}>
                                <h4>Начальная цена: {props.StartCost} руб.</h4>
                            </ListGroupItem>
                            <ListGroupItem className={"bg-body-tertiary border-primary"}>
                                <h4>Размер задатка: {props.Deposit} руб.</h4>
                            </ListGroupItem>
                            <ListGroupItem className={"bg-body-tertiary border-primary"}>
                                <h4>Тип земельного участка: {props.PropertyType}</h4>
                            </ListGroupItem>
                            <ListGroupItem className={"bg-body-tertiary border-primary"}>
                                <h4>Статус лота: {props.State}</h4>
                            </ListGroupItem>
                            <ListGroupItem className={" bg-body-tertiary border-primary"}>
                                <h4>Вид разрешённого использования земельного участка : {props.Vid}</h4>
                            </ListGroupItem>
                            <ListGroupItem className={" bg-body-tertiary border-primary"}>
                                <h4>Кадастровый номер земельного участка : {props.Kadastr}</h4>
                            </ListGroupItem>
                            <ListGroupItem className={" bg-body-tertiary border-primary"}>
                                <h4>Дата начала подачи заявок: {props.StartDate}</h4>
                            </ListGroupItem>
                            <ListGroupItem className={" bg-body-tertiary border-primary"}>
                                <h4>Дата окончания подачи заявок: {props.EndDate}</h4>
                            </ListGroupItem>
                            <ListGroupItem className={" bg-body-tertiary border-primary"}>
                                <h4>Субъект РФ: {props.RFSubject}</h4>
                            </ListGroupItem>
                            <ListGroupItem className={" bg-body-tertiary border-primary"}>
                                <h4>Местоположение имущества: {props.Address}</h4>
                            </ListGroupItem>
                            <ListGroupItem className={" bg-body-tertiary border-primary"}>
                                <h4>Площадь: {props.Area} M<sup>2</sup></h4>
                            </ListGroupItem>
                            <ListGroupItem className={" bg-body-tertiary border-primary"}>
                                {(props.Type === TorgiType.Rent) ? <h4>Срок аренды: {props.Rent} лет</h4>
                                    : <h4> Шаг аукциона: {props.AuctionStep} руб.</h4> }
                            </ListGroupItem>
                            <ListGroupItem className={" bg-body-tertiary border-primary"}>
                                <h4>Электронная площадка: {props.Platform} </h4>
                            </ListGroupItem>
                        </ListGroup>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <FormGroup className={'text-start  justify-content-center  mb-5 mt-3'}>
                                <FormLabel><h2>Ссылка на извещение:</h2></FormLabel>
                                <Form.Label expand={"lg"} className={"bg-body-tertiary text-center ms- text-info"}>
                                    <Link>{props.Link}</Link>
                                </Form.Label>
                            </FormGroup>
                        </Col>
                    </Row>
                </Container>
            </Form>
        )
    }
    
    if(bestOption)
        return <BestOption props={bestOption}/>
    return <></>
}
