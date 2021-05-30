import React, {Component} from "react";
import {Col, Container, Row, Alert, Form} from "react-bootstrap";
import authHeader from "../components/authHeader";

export default class Sensors extends Component {

    constructor(props) {
        super(props);
        this.generate = this.generate.bind(this)
        this.state = {isGenerated: false, token: ''}
    }

    generate(e){
        e.preventDefault()

        let options = {
            Method: 'GET',
            headers: Object.assign(authHeader(), {
                'Access-Control-Allow-Origin': 'http://3.142.115.21',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            })
        }
        console.log(options)
        let request = new Request("http://3.142.115.21/generateToken", options)
        fetch(request)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isGenerated: true,
                        token: result.token
                    });
                })
    }

    render() {
        return (
            <Container style={{width: '600px', height: '800px', marginTop: '80px'}}>
                <Row>
                    <Col>
                        <h1 className="d-inline">Токен:</h1>
                        <Alert variant='warning'>
                            Внимание! После обновления страницы токен больше не будет доступен</Alert>
                        {this.state.isGenerated && <Form.Control type="text" value={this.state.token}/>}
                        <button className="btn btn-outline-primary float-end"
                                onClick={this.generate}>Сгенерировать токен</button>
                    </Col>
                </Row>
            </Container>
        )
    }
}