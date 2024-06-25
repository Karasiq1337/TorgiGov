import React from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, FormGroup, FormLabel, FormText, Row} from "react-bootstrap";
import {useAppSelector} from "../../AppHooks";
import {LotList} from "../Torgi/Lots";
import {TorgiType} from "../Torgi/Torgi.types";


export function Favorites() {
    const favoriteLots = useAppSelector((state) => state.reducer.torgi.lots);
    const isLogged = useAppSelector((state) => state.reducer.auth.isLogged);
    const rentLots = favoriteLots.filter(lot => lot.Type === TorgiType.Rent);
    const saleLots = favoriteLots.filter(lot => lot.Type === TorgiType.Sale);
    
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
                    <LotList props={rentLots}/>
                    <h3>Продажа</h3>
                    <Form.Label expand={"lg"} className={"text-center border border-primary bg-body-tertiary"}></Form.Label>
                    <LotList props={saleLots}/>
                </Row>
            </Container>
        </Form>
    )
}