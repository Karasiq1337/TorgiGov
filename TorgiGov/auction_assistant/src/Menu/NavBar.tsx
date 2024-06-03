import React from "react";
import Form from 'react-bootstrap/Form';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import InputGroupText from "react-bootstrap/InputGroupText";
import FormCheckInput from "react-bootstrap/FormCheckInput";


export function NavBar(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                    <InputGroup className="me-auto">
                        <InputGroupText>
                            Логин
                        </InputGroupText>
                        <Form.Control placeholder="Логин">
                        </Form.Control>
                    </InputGroup>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}