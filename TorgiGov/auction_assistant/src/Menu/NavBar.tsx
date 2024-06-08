import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import {Dropdown, FormText, Image, Modal, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import InputGroupText from "react-bootstrap/InputGroupText";
import FormCheckInput from "react-bootstrap/FormCheckInput";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';


    export function NavBar() {
        const [login, setLogin] = useState<string>('');
        const [password, setPassword] = useState<string>('');
        const [showForm, setShowForm] = useState<boolean>(true);
        const handleLogin = () => {
            setShowForm(false);
        };
        return (
            <>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="/home">AuctionAssistant</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse>
                            <Nav className={"me-5"}>
                                <NavLink className={"text-center border border-primary bg-primary"}>Избранное</NavLink>
                                <NavLink className={"text-center border border-primary"}>Список лотов</NavLink>
                                <NavDropdown className={"bg-primary"} title={"Сравнить"}>
                                    <NavDropdown.Item href={"Аренда"}>Аренда</NavDropdown.Item>
                                    <NavDropdown.Item href={"Продажа"}>Продажа</NavDropdown.Item>
                                </NavDropdown>
                                <NavLink className={"text-center border border-primary"}>Статистика</NavLink>
                            </Nav>
                            <Nav>
                                <div>
                                {showForm ? (
                                    <InputGroup className="">
                                        <Form.Control type={"text"} placeholder={"Логин"}
                                                      className={"form-control me-3"} value={login}
                                                      onChange={(e) => setLogin(e.target.value)}/>
                                        <Form.Control type={"password"} placeholder={"Пароль"}
                                                      className={"form-control me-3"} value={password}
                                                      onChange={(e) => setPassword(e.target.value)}/>
                                        <Button type={"submit"} className={"btn btn-primary me-5"}
                                                onClick={handleLogin}>Вход</Button>
                                    </InputGroup>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={faGem}/>
                                        <span>{login}</span>
                                    </>
                                )}
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
