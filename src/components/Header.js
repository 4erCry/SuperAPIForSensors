import React, {Component} from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import sas from './sus1.jpg'

export default class Header extends Component{
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={sas}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="SAS"
                            />SAS
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link href="/docs">Документация</Nav.Link>
                                <Nav.Link href="/sensors">Датчики</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}