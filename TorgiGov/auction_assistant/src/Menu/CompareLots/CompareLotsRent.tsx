import React, {FC} from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, FormGroup, FormLabel, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {LotList} from "../Torgi/Lots";
import {useAppDispatch, useAppSelector} from "../../AppHooks";
import {LotProps, TorgiType} from "../Torgi/Torgi.types";
import {bestoption} from "../BestOption/BestOptionReducer";

export function CompareLotsRent()  {
    const dispatch = useAppDispatch()
    const isLogged = useAppSelector((state) => state.reducer.auth.isLogged);
    const favoriteLots = useAppSelector((state) => state.reducer.torgi.lots);
    const rentLots = favoriteLots.filter(lot => lot.Type === TorgiType.Rent);
    const maxArea = Math.max(...rentLots.flatMap(prop => prop.Area ? prop.Area : []));
    const minDeposit = Math.min(...rentLots.flatMap(prop => prop.Deposit ? prop.Deposit : []));
    const minStartCost = Math.min(...rentLots.flatMap(prop => prop.StartCost ? prop.StartCost : []));
    const maxRent = Math.max(...rentLots.flatMap(prop => prop.Rent ? prop.Rent : []));
    const scores = rentLots.map(prop =>{
        let score = 0;
        if(prop.Area == maxArea){
            score += 8;
        }
        if(prop.Deposit == minDeposit){
            score += 2;
        }
        if(prop.StartCost == minStartCost){
            score += 4;
        }
        if(prop.Rent == maxRent){
            score += 1;
        }
        return score;
    })
    dispatch(bestoption(rentLots[scores.indexOf(Math.max(...scores))]))
    
    if(!isLogged){
        return (
            <Form>
                <Container>
                    <FormLabel className={'justify-content-center mt-5'}>
                        <h2>Для просмотра страницы необходимо авторизоваться</h2>
                    </FormLabel>
                </Container>
            </Form>
        )
    }
    return (
        <>
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
                        <LotList props={rentLots}/>
                    </Row>
                    <Row>
                        <h3 className={'mt-5 text-center'}>Анализ характеристик</h3>
                    </Row>
                    <Row>
                        <PropertyList props={rentLots} scores={scores}></PropertyList>
                    </Row>
                    <Row>
                    </Row>
                    <Row>
                        {(rentLots.length !== 0) ? <Button className={'mb-5'} type={"submit"} href={"BestOption"}>
                            Просмотр оптимального варианта
                        </Button> : <></>}
                    </Row>
                </Container>
            </Form>
        </>
    )
}


const PropertyList : FC<{props : LotProps[], scores: number[]}> = ({props, scores}) =>{
    let count = 0;
    
    return(
        <>
            {props.map(prop => {
                count++;
                return <Property props={prop} score={scores[count-1]}/>
            })}
        </>
    )
}

const Property : FC<{props : LotProps, score : number}> = ({props, score}) => {
    return (
        <Form className={"text-center border border-primary bg-body-tertiary mt-2 mb-3"}>
            <Row>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>Размер задатка:</h4>
                            <h4>{props.Deposit} руб.</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>Начальная цена: </h4>
                            <h4>{props.StartCost} руб.</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3'}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>Площадь: </h4>
                            <h4>{props.Area}  M<sup>2</sup></h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary "}>
                            <h4>Срок аренды : </h4>
                            <h4>{props.Rent} лет</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup className={'text-start ms-5 mt-3 '}>
                        <Form.Label expand={"lg"} className={" bg-body-tertiary text-primary"}>
                            <h4>Оценка: </h4>
                            <h4>{score} баллов</h4>
                        </Form.Label>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}