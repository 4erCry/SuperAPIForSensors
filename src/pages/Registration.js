import React, {Component} from "react";
import {Form, Container, Button} from "react-bootstrap";
import AuthService from "../components/AuthService";

export default class Entrance2 extends Component {

    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeTimezone = this.onChangeTimezone.bind(this);
        this.state = {
            username: "",
            password: "",
            timezone: 0,
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeTimezone(e) {
        this.setState({
            timezone: parseInt(e.target.value)
        });
    }

    handleRegister(e) {
        e.preventDefault();

        AuthService.register(this.state.username, this.state.password, this.state.timezone).then(
            () => {
                this.props.history.push("/entrance");
                window.location.reload();
            })
    }


    render() {
        return (
            <>
                <Container style={{width: '500px'}}>
                    <h1 className="text-center">Введите данные</h1>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Имя пользователя</Form.Label>
                            <Form.Control type="email" placeholder="Введите имя пользователя"
                                          onChange={this.onChangeUsername}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>ПАРОЛЬ</Form.Label>
                            <Form.Control type="password" placeholder="Введите пароль"
                                          onChange={this.onChangePassword}/>
                        </Form.Group>

                        <Form.Group controlId="timeZone">
                            <Form.Label>Временная зона</Form.Label>
                            <Form.Control type="timeZone" placeholder="Введите временную зону"
                                          onChange={this.onChangeTimezone}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Запомнить меня"/>
                        </Form.Group>

                        <Button onClick={this.handleRegister} className="primary">Отправить</Button>
                    </Form>
                </Container>
            </>
        )
    }
}