import React from "react";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import sas from '../assets/sas.png'

export default function  Docs() {

        return (
            <Container class="mt-5">
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row class="pt-100">
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-5">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">S</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">T</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">A</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">S</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">S</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-5">
                                <Tab.Pane eventKey="first">
                                    <img src={sas} alt={sas}/>
                                    <p>
                                        Интересный факт номер 1.
                                        За границей все уверены, что Чебурашка – это ОНА.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={sas} alt={sas}/>
                                    <p>
                                        Интересный факт номер 2.
                                        Каждого четвертого американца показывали по телевизору.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={sas} alt={sas}/>
                                    <p>
                                        Интересный факт номер 3.
                                        Чтобы расколоть орех, достаточно положить его в горячую воду на 48 часов.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src={sas} alt={sas}/>
                                    <p>
                                        Интересный факт номер 4.
                                        Все современные реактивные самолеты способны преодолеть скорость звука.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src={sas} alt={sas}/>
                                    <p>
                                        Интересный факт номер 0.
                                        Факты были не очень интересны(
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </Container>
        )
}