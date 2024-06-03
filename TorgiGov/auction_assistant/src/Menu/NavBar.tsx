import React from "react";
import Form from 'react-bootstrap/Form';
import {Dropdown, Image, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import InputGroupText from "react-bootstrap/InputGroupText";
import FormCheckInput from "react-bootstrap/FormCheckInput";
import {Link} from "react-router-dom";

export function NavBar(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/home">AuctionAssistant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav className={"me-3 "}>
                        <NavLink className={"text-center border border-primary bg-primary"}>Личный кабинет</NavLink>
                        <NavLink className={"text-center border border-primary"}>Список лотов</NavLink>
                            <NavDropdown className={"bg-primary"} title={"Сравнить"}>
                                <NavDropdown.Item href={"Аренда"}>Аренда</NavDropdown.Item>
                                <NavDropdown.Item href={"Продажа"}>Продажа</NavDropdown.Item>
                            </NavDropdown>
                        <NavLink className={"text-center border border-primary"}>Статистика</NavLink>
                    </Nav>
                    <Nav>
                    <InputGroup className="">
                        <Form.Control type={"text"} placeholder={"Логин"} className={"form-control me-3"}/>
                        <Form.Control type={"password"} placeholder={"Пароль"} className={"form-control me-3"}/>
                        <Button type={"submit"} className={"btn btn-primary"}>Вход</Button>
                    </InputGroup>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}