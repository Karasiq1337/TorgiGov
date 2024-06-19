import React from "react";
import {
    Nav,
    Navbar,
    NavDropdown,
    NavLink
} from "react-bootstrap";
import {Container} from "react-bootstrap";
import Authorization from "./Authorization/Authorization";

export const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="border bg-light">
                <Container>
                    <Navbar.Brand href="/home">Auction Assistant</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className={"me-5"}>
                            <NavLink href={'/favorites'} className={"text-center border border-primary bg-primary text-white"}>Избранное</NavLink>
                            <NavLink href={'/search'} className={"text-center border border-primary text-black"} >Поиск лотов</NavLink>
                            <NavDropdown className={"d-flex justify-content-center bg-primary"} title={"Сравнить"}>
                                <NavDropdown.Item href={'/CompareRent'}>Аренда</NavDropdown.Item>
                                <NavDropdown.Item href={"Продажа"}>Продажа</NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className={"text-center border border-primary text-black"}>Статистика</NavLink>
                        </Nav>
                        <Nav>
                            <Authorization></Authorization>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
