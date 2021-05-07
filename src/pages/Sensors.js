import React, {Component} from "react";
import {Container, Form, Button} from "react-bootstrap";

export default class Sensors extends Component{
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className="text-center">Введите данные</h1>
                <Form>
                    <Form.Group controlId="formBasicStartDate">
                        <Form.Label>Дата начала</Form.Label>
                        <Form.Control type="date" placeholder="Введите дату"/>
                        <Form.Text>
                            BLablablabla
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEndDate">
                        <Form.Label>Дата конца</Form.Label>
                        <Form.Control type="time" placeholder="Введите время"/>
                        <Form.Text>
                            BLablablabla
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicValue">
                        <Form.Label>Введите значение</Form.Label>
                        <Form.Control as="textarea" rows="1"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Отправить</Button>
                </Form>
            </Container>

        )
    }
}