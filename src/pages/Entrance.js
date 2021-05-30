import React, {Component} from "react";
import {Form, Container, Alert, Button} from "react-bootstrap";
import AuthService from "../components/AuthService";

export default class Entrance extends Component {

    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: "",
            password: "",
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

    handleLogin(e) {
        e.preventDefault();

        AuthService.login(this.state.username, this.state.password).then(
            () => {
                this.props.history.push("/table");
                window.location.reload();
            })
    }


    render() {
        return (
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

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Запомнить меня"/>
                    </Form.Group>

                    <Button onClick={this.handleLogin} className="primary">Отправить</Button>
                </Form>
            </Container>
        )
    }
}