import React from "react";
import {
    Nav,
    Navbar,
    NavDropdown,
    NavLink
} from "react-bootstrap";
import {Container} from "react-bootstrap";
import Authorization from "./Authorization/Authorization";
import RegModal from "./Authorization/RegModal";
export const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/home">AuctionAssistant</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className={"me-5"}>
                            <NavLink className={"text-center border border-primary bg-primary"}>Избранное</NavLink>
                            <NavLink href={'/search'} className={"text-center border border-primary"} >Поиск лотов</NavLink>
                            <NavDropdown className={"d-flex justify-content-center bg-primary"} title={"Сравнить"}>
                                <NavDropdown.Item href={"Аренда"}>Аренда</NavDropdown.Item>
                                <NavDropdown.Item href={"Продажа"}>Продажа</NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className={"text-center border border-primary"}>Статистика</NavLink>
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
