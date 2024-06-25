import React from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {PieChart} from "../../Components/Donut";
import 'chart.js/auto';
import {LotSearchParams, PropertyForm, PropertyType, TorgiState, TorgiType} from "../Torgi/Torgi.types";



export const Statistic: React.FC = () => {
    const data = {
        labels: ['Форма собственности', 'Вид торга', 'Тип земельного участка'],
        datasets: [
            {
                label: 'Предпочтение пользователей',
                data: [300, 50, 100],
                backgroundColor: ['green', 'aqua', 'blue'],
            },
        ],
    };
    return (
        <Form>
            <Container>
                <Row>
                    <blockquote className="blockquote">
                        <h1 className={'text-center mt-5'}>Статистика</h1>
                        <footer className="blockquote-footer text-center mt-2">Анализируйте предпочтения других людей
                        </footer>
                    </blockquote>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            
                        </ListGroup>
                    </Col>
                    <Col className={'mt-5 h-50 w-50 justify-content-center'}>
                        <PieChart data={data}></PieChart>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}