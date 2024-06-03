import React from "react";
import Form from 'react-bootstrap/Form';
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";


export function NavBar(){
    return (
        <Navbar variant = "light">
            <Container>
                <div className="navbar-header">
                    <Navbar.Toggle data-toggle="collaspe" data-target=".navbar-collaspe">
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </Navbar.Toggle>
                    <Navbar.Brand>AuctionAssistant</Navbar.Brand>
                </div>
                <Navbar.Collapse>
                    <Form className="navbar-form navbar-right">
                        <Form.Group>
                            <Form.Control type={"text"} placeholder={"Логин"} className={"form-control"}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type={"password"} placeholder={"Пароль"} className={"form-control"}/>
                        </Form.Group>
                            <Button type={"submit"} className={"btn btn-primary"}>Вход</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}