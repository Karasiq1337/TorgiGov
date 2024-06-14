import {Carousel, Container, Image, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React from "react";
import Auctionlogo from 'Pictures/AuctionAssistantlogo.png';

export function Home(){
    return(
        <Container>
            <Form>
                <Row>
                    <h1 className={'text-center mt-5'}>Добро пожаловать</h1>
                    <p></p>
                </Row>
            </Form>
    <Carousel>
        <Carousel.Item>
            <img className={'d-block w-100'} src={'Pictures/AuctionAssistantlogo.png'} alt={'Чумба'}/>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className={'d-block w-100'} src={'Pictures/AuctionAssistantlogo.png'} alt={'Чумба'}/>
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className={'d-block w-100'} src={'Pictures/AuctionAssistantlogo.png'} alt={'Чумба'}/>
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
        </Container>
    )
}