import React, {Component} from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import sas from './sus1.jpg'
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

import Home from "../pages/Home";
import Docs from "../pages/Docs";
import Sensors from "../pages/Sensors";

export default class Header extends Component{
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
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

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/docs" component={Docs}/>
                        <Route exact path="/sensors" component={Sensors}/>
                    </Switch>
                </Router>
            </>
        );
    }
}