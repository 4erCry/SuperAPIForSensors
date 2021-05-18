import React from "react";
import {Container, Form, Button} from "react-bootstrap";

import {withAuth} from "../components/UserStatus";
import {Redirect} from "react-router-dom";

export default withAuth(({isAuthorized, authorize})=> (
        isAuthorized ? (<Redirect to="/"/>) : (

            <Container style={{width: '500px'}}>
                <h1 className="text-center">Введите данные</h1>
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

                    <Button onClick={authorize} className="primary">Отправить</Button>
                </Form>
            </Container>
        )
    )
)