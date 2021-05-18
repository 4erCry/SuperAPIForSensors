import React from "react";
import {Container, Navbar, Nav, Button} from "react-bootstrap";
import sas from '../assets/sus1.jpg'
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute";

import {withAuth} from "./UserStatus";

import Home from "../pages/Home";
import Docs from "../pages/Docs";
import Sensors from "../pages/Sensors";
import Registration from "../pages/Registration";
import Entrance from "../pages/Entrance";

export default withAuth(({isAuthorized})=> isAuthorized ?  (
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
                    <Nav className="mr-auto" style={{'gap': '10px'}}>
                        <Button  variant="outline-info" href="/entrance">SIGN OUT</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/docs" component={Docs}/>
                <PrivateRoute exact path="/table" component={Sensors}/>
                <Route exect path="/register" component={Registration}/>
                <Route exect path="/entrance" component={Entrance}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    </>
    ) : (
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
                            {/*<Nav.Link href="/table">Датчики</Nav.Link>*/}
                        </Nav>
                        <Nav className="mr-auto" style={{'gap': '10px'}}>
                            <Button  variant="outline-info" href="/entrance">SIGN IN</Button>
                            <Button variant="outline-info" href="/register">SIGN UP</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/docs" component={Docs}/>
                    <PrivateRoute exact path="/table" component={Sensors}/>
                    <Route exect path="/register" component={Registration}/>
                    <Route exect path="/entrance" component={Entrance}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </>
    )
)

           /*return (
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
                            <Nav className="mr-auto" style={{'gap': '10px'}}>
                                <Button  variant="outline-info" href="/entrance">SIGN IN</Button>
                                <Button variant="outline-info" href="/register">SIGN UP</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/docs" component={Docs}/>
                        <PrivateRoute exact path="/table" component={Sensors}/>
                        <Route exect path="/register" component={Registration}/>
                        <Route exect path="/entrance" component={Entrance}/>
                        <Redirect to="/"/>
                    </Switch>
                </Router>
            </>
        );*/


/*const [show, setShow] = useState(false);
const handleClose=()=>setShow(false);
const handleShow=()=>setShow(true);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [user, setUser] = useState(false);
const signOut=()=>setUser(false);*/

{/*<Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                </Modal>*/}