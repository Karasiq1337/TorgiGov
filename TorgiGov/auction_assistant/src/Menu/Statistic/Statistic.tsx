import React, {useCallback, useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {PieChart} from "../../Components/Donut";
import 'chart.js/auto';
import {LotSearchParams, PropertyForm, PropertyType, TorgiState, TorgiType} from "../Torgi/Torgi.types";
import {getStats as getStatsApi} from "../../Api/Stats";
import {Await} from "react-router-dom";



export const Statistic: React.FC = () => {
    const [stats, setStats] = useState(new Map<string, number>);
    const [haveStats, setHaveStats] = useState(false);


    
    useEffect(() => {
        // React advises to declare the async function directly inside useEffect
        async function getStats() {
            const stats = await getStatsApi()
            setStats(new Map<string, number>(stats));
        }
        getStats().then(r => setHaveStats(true));
    }, [haveStats]);
    
    if(haveStats) {
        const torgiTypeData = {
            labels: ['Аренда', 'Продажа'],
            datasets: [
                {
                    label: 'Предпочтение пользователей',
                    data: [stats.get("Rent"), stats.get("Selling")],
                    backgroundColor: ['green', 'aqua'],
                },
            ],
        };
        const propertyTypeData = {
            labels: ['Земли сельскохозяйственного назначения', 'Земли населённых пунктов'],
            datasets: [
                {
                    label: 'Предпочтение пользователей',
                    data: [stats.get("AgriculturalLand"), stats.get("SettlementsLands")],
                    backgroundColor: ['green', 'aqua'],
                },
            ],
        };
        const propertyFormData = {
            labels: ['Государственная собственность', 'Муниципальная собственность', 'Собственность субъектов РФ'],
            datasets: [
                {
                    label: 'Предпочтение пользователей',
                    data: [stats.get("Gos"), stats.get("Urban"), stats.get("RFSubject")],
                    backgroundColor: ['green', 'aqua', "black"],
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
                        <PieChart data={torgiTypeData}></PieChart>
                    </Col>
                    <Col className={'mt-5 h-50 w-50 justify-content-center'}>
                        <PieChart data={propertyTypeData}></PieChart>
                    </Col>
                    <Col className={'mt-5 h-50 w-50 justify-content-center'}>
                        <PieChart data={propertyFormData}></PieChart>
                    </Col>
                </Row>
            </Container>
        </Form>
    )}
    return <></>
}