import {Carousel, Col, Container, ListGroup, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React from "react";

export function Home(){
    return(
        <Container>
            <Form>
                <Row>
                    <blockquote className="blockquote">
                        <h1 className={'text-center mt-5'}>Добро пожаловать </h1>
                        <footer className="blockquote-footer text-center mt-2">Ваш помощник в электронных аукционах на земельные участки
                        </footer>
                    </blockquote>
                </Row>
            </Form>
            <Row>
                <Col>
            <Carousel className={'w-100 h-100 mb-5'}>
        <Carousel.Item>
            <img className={'d-block w-100 h-50'} src={'Pictures/AuctionGrad4.png'} alt={'Чумба'}/>
            <Carousel.Caption className={'text-primary-emphasis w-70 h-50'}>
                <h3></h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className={'d-block w-100 h-50'} src={'Pictures/AuctionGrad2.png'} alt={'Чумба'}/>
            <Carousel.Caption className={'text-primary'}>
                <h3></h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className={'d-block w-100 h-50'} src={'Pictures/AuctionGrad3.png'} alt={'Чумба'}/>
            <Carousel.Caption className={'text-primary'}>
                <h3></h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
                </Col>
                <Col>
                    <Form className={'border border-primary-subtle border-4 mb-5'}>
                    <h2 className={'bg-info text-center text-body-secondary'}>Что мы предлагаем:</h2>
                        <h3 className={'ms-4'}><em>Поиск лотов</em></h3>
                    <ListGroup as="ol">
                        <ListGroup.Item as="li" variant={'primary'}>Удобство в использывании</ListGroup.Item>
                        <ListGroup.Item as="li" variant={'primary'}>Только актуальные торги</ListGroup.Item>
                        <ListGroup.Item as="li" variant={'primary'}>Сохраняйте понравившиеся лоты</ListGroup.Item>
                    </ListGroup>
                    <h3 className={'ms-4 mt-2'}><em>Сравнение лотов</em></h3>
                    <ListGroup as="ol">
                        <ListGroup.Item as="li" variant={'primary'}>Избранные вами лоты сравниваются</ListGroup.Item>
                        <ListGroup.Item as="li" variant={'primary'}>Получайте оптимальный вариант торга</ListGroup.Item>
                    </ListGroup>
                    <h3 className={'ms-4 mt-2'}><em>Избранное</em></h3>
                    <ListGroup as="ol">
                        <ListGroup.Item as="li" variant={'primary'}>Понравившиеся лоты находятся здесь</ListGroup.Item>
                        <ListGroup.Item as="li" variant={'primary'}>Извещение</ListGroup.Item>
                        <ListGroup.Item as="li" variant={'primary'}>Информация об организаторе торгов</ListGroup.Item>
                    </ListGroup>
                        <h3 className={'ms-4 mt-2'}><em>Статистика</em></h3>
                    <ListGroup as="li">
                        <ListGroup.Item as="li" variant={'primary'}>Анализируйте решениях других польователей</ListGroup.Item>
                        <ListGroup.Item as="li" variant={'primary'}>Основана на выборах реальных людей</ListGroup.Item>
                    </ListGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}