import React, {FC, memo, useState} from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, FormGroup, FormLabel, FormText, Modal, ModalBody, ModalTitle, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {LotList} from "../Torgi/Lots";
import {useAppDispatch, useAppSelector} from "../../AppHooks";
import {LotProps, TorgiType} from "../Torgi/Torgi.types";
import {setNoShow, setShow} from "./CompareLotsReducer";

export function CompareLotsRent()  {
    const favoriteLots = useAppSelector((state) => state.reducer.torgi.lots);
    const rentLots = favoriteLots.filter(lot => lot.Type === TorgiType.Rent);
    const dispatch = useAppDispatch();
    const showModal = useAppSelector((state) => state.reducer.compare.showCompareModal);
    const CompareModal : FC<{props : LotProps[]}> = ({props}) => {
        const maxArea = Math.max.apply(props.flatMap(prop => prop.Area ? prop.Area : []));
        const minDeposit = Math.min.apply(props.flatMap(prop => prop.Area ? prop.Deposit : []));
        const minStartCost = Math.min.apply(props.flatMap(prop => prop.Area ? prop.Area : []));
        const maxRent = Math.max.apply(props.flatMap(prop => prop.Area ? prop.Rent : []));
        const scores = props.map(prop =>{
            let score = 0;
            if(prop.Area == maxArea){
                score++;
            }
            if(prop.Deposit == minDeposit){
                score++;
            }
            if(prop.StartCost == minStartCost){
                score++;
            }
            if(prop.Rent == maxRent){
                score++;
            }
            return score;
        })


        return (
            <div className="modal show"
                 style={{ display: 'block', position: 'initial' }}>
                <Modal show={showModal} onHide={() => dispatch(setNoShow())} backdrop="static">
                    <Modal.Header closeButton>
                        <ModalTitle>Результат сравнения</ModalTitle>
                    </Modal.Header>
                    <ModalBody>
                        <Form>
                            <FormGroup >
                                <FormLabel className={'text-center'}>Итоговая оценка лотов:</FormLabel>
                            </FormGroup>
                            <FormGroup className={'mb-3 mt-2'}>
                                {ScoreList(scores)}
                            </FormGroup>
                            <FormGroup >
                                <FormLabel className={'text-center'}>Оптимальный вариант найден !</FormLabel>
                                <Button>Посмотреть</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

    const ScoreList = (scores : number[]) => {
        let count = 0;
        return(
            scores.map(score => {
                count++;
                return Score(score, count);
            })
        )
    }
    const Score = (score : number, count : number) => {
        return (
            <li>Оценка {count} лота: {score}</li>
        )
    }
    
    return (
        <>
            {showModal && <CompareModal props={rentLots}/>}
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
                        <PropertyList props={rentLots}></PropertyList>
                    </Row>
                    <Row>
                    </Row>
                    <Row>
                        <Button className={'mb-5'} type={"submit"} onClick={() => dispatch(setShow())}>
                            Сравнить
                        </Button>
                    </Row>
                </Container>
            </Form>
        </>
    )
}


const PropertyList : FC<{props : LotProps[]}> = ({props}) =>{
    return(
        <>
            {props.map(prop => <Property props={prop}/>)}
        </>
    )
}

const Property : FC<{props : LotProps}> = ({props}) => {
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
            </Row>
        </Form>
    )
    
    
}