import React, {useState} from "react";
import {Container, Navbar, Nav, Button, Modal, Form} from "react-bootstrap";
import sas from './sus1.jpg'
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import Home from "../pages/Home";
import Docs from "../pages/Docs";
import Sensors from "../pages/Sensors";

export default function  Header() {

    const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);

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
                        <Navbar.Collapse id="responsive-navbar-nav" style={{'justify-content': 'space-between'}}>
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link href="/docs">Документация</Nav.Link>
                                <Nav.Link href="/table">Датчики</Nav.Link>
                            </Nav>
                            <Nav className="mr-auto" style={{'gap': '10px'}} >
                                <Button variant="outline-info" onClick={handleShow}>Log In</Button>
                                <Button variant="outline-info" onClick={handleShow}>Sign Out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control type="email" placeholder="Введите email"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>ПАРОЛЬ</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Запомнить меня"/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/docs" component={Docs}/>
                        <Route exact path="/table" component={Sensors}/>
                    </Switch>
                </Router>
            </>
        );
}
