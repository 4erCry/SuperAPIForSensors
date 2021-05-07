import React, {Component} from "react";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {Button} from "bootstrap";

export default class Docs extends Component{
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-3">
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
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://images.wallpaperscraft.ru/image/siluet_luna_lodka_135277_225x300.jpg"/>
                                    <p>
                                        Информация которую нужно заменить,
                                        но мне оооочень лень.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://images.wallpaperscraft.ru/image/siluet_luna_lodka_135277_225x300.jpg"/>
                                    <p>
                                        Информация которую нужно заменить,
                                        но мне оооочень лень.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://image.winudf.com/v2/image1/Y29tLmhkd2FsbHBhcGVyLndhbGxwYXBlcl9zY3JlZW5fcnUtUlVfNl8xNjAzMTE3MTYzXzAxMA/screen-6.jpg?fakeurl=1&type=.jpg"/>
                                    <p>
                                        Информация которую нужно заменить,
                                        но мне оооочень лень.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://image.winudf.com/v2/image1/Y29tLmhkd2FsbHBhcGVyLndhbGxwYXBlcl9zY3JlZW5fcnUtUlVfNl8xNjAzMTE3MTYzXzAxMA/screen-6.jpg?fakeurl=1&type=.jpg"/>
                                    <p>
                                        Информация которую нужно заменить,
                                        но мне оооочень лень.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://image.winudf.com/v2/image1/Y29tLmhkd2FsbHBhcGVyLndhbGxwYXBlcl9zY3JlZW5fcnUtUlVfNl8xNjAzMTE3MTYzXzAxMA/screen-6.jpg?fakeurl=1&type=.jpg"/>
                                    <p>
                                        Информация которую нужно заменить,
                                        но мне оооочень лень.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </Container>
        )
    }
}