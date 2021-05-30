import React, {Component} from "react";
import {Container, Navbar, Nav, Button} from "react-bootstrap";
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";

import sas from '../assets/sus1.jpg'
import Home from "../pages/Home";
import Docs from "../pages/Docs";
import Sensors from "../pages/Sensors";
import Registration from "../pages/Registration";
import Entrance from "../pages/Entrance";
import House from "./House";
import NewHouse from "./NewHouse";
import Room from "./Room";
import Sensor from "./Sensor";
import Token from "../pages/Token";
import AuthService from "./AuthService";
import checkAuthorization from "./checkAuthorization";
import NewRoom from "./NewRoom";
import NewSensor from "./NewSensor";


export default class Header extends Component{

    render() {

        let isAuthorized = checkAuthorization()

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
                                {isAuthorized && <Nav.Link href="/table">Датчики</Nav.Link>}
                                {isAuthorized && <Nav.Link href="/token">Токен</Nav.Link>}
                            </Nav>
                            <Nav className="mr-auto" style={{'gap': '10px'}}>
                                {isAuthorized && <Button onClick={AuthService.logout}
                                                         variant="outline-info" href="/entrance">SIGN OUT</Button>}
                                {!isAuthorized && <Button variant="outline-info" href="/entrance">SIGN IN</Button>}
                                {!isAuthorized && <Button variant="outline-info" href="/reg">SIGN UP</Button>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/docs" component={Docs}/>
                        <PrivateRoute exact path="/table" component={Sensors}/>
                        <PrivateRoute exact path="/token" component={Token}/>
                        <PrivateRoute exact path="/table/addHouse" component={NewHouse}/>
                        <PrivateRoute exact path="/table/:houseId" component={House}/>
                        <PrivateRoute exact path="/table/:houseId/addRoom" component={NewRoom}/>
                        <PrivateRoute exact path="/table/:houseId/:roomId" component={Room}/>
                        <PrivateRoute exact path="/table/:houseId/:roomId/addSensor" component={NewSensor}/>
                        <PrivateRoute exact path="/table/:houseId/:roomId/:sensorId" component={Sensor}/>
                        <Route exect path="/reg" component={Registration}/>
                        <Route exect path="/entrance" component={Entrance}/>
                        <Redirect to="/"/>
                    </Switch>
                </Router>
            </>
        )
    }
}
