import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import {Col, Container, Row} from "react-bootstrap";
import {PieChart} from "../../Components/Donut";
import 'chart.js/auto';
import {getStats as getStatsApi} from "../../Api/Stats";




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
                    backgroundColor: ['#519DE9', '#06C'],
                },
            ],
        };
        const propertyTypeData = {
            labels: ['Земли сельскохозяйственного назначения', 'Земли населённых пунктов'],
            datasets: [
                {
                    label: 'Предпочтение пользователей',
                    data: [stats.get("AgriculturalLand"), stats.get("SettlementsLands")],
                    backgroundColor: ['#519DE9', '#06C'],
                },
            ],
        };
        const propertyFormData = {
            labels: ['Государственная собственность', 'Муниципальная собственность', 'Собственность субъектов РФ'],
            datasets: [
                {
                    label: 'Предпочтение пользователей',
                    data: [stats.get("Gos"), stats.get("Urban"), stats.get("RFSubject")],
                    backgroundColor: ['#519DE9', '#06C', "#004B95"],
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
                    <Col className={'mt-5 h-50 w-50 justify-content-center'}>
                        <h3 className={'text-center border border-primary'}>Вид торга</h3>
                        <PieChart data={torgiTypeData}></PieChart>
                    </Col>
                    <Col className={'mt-5 h-50 w-50 justify-content-center'}>
                        <h3 className={'text-center border border-primary'}>Тип земельного участка</h3>
                        <PieChart data={propertyTypeData}></PieChart>
                    </Col>
                    <Col className={'mt-5 h-50 w-50 justify-content-center '}>
                        <h3 className={'text-center border border-primary'}>Форма собственности</h3>
                        <PieChart data={propertyFormData}></PieChart>
                    </Col>
                </Row>
            </Container>
        </Form>
    )}
    return <></>
}