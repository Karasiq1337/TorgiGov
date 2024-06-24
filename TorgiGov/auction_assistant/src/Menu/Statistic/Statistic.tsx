import React from "react";
import Form from "react-bootstrap/Form";
import {Container, Row} from "react-bootstrap";

export function Statistic() {
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
                
            </Container>
        </Form>
    )
}