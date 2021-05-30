import React, {Component} from "react";
import {Form, Container, Alert} from "react-bootstrap";
import authHeader from "./authHeader";

export default class NewSensor extends Component{

    constructor(props) {
        super(props)
        this.sendData = this.sendData.bind(this)
        this.state = {
            houseId: parseInt(props.match.params.houseId, 10),
            roomId: parseInt(props.match.params.roomId, 10),
            error: false,
            isLoaded: false}
    }

    sendData(e){
        e.preventDefault()
        let data = {name: this.refs.name.value, typeId: this.refs.type.value}

        let options = {
            method: 'POST',
            headers: Object.assign(authHeader(), {
                'Access-Control-Allow-Origin': 'http://3.142.115.21',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(data)}
        let request = new Request('http://3.142.115.21/houses/' + this.state.houseId + '/rooms/' + + this.state.roomId + '/sensors', options)
        fetch(request)
            .then(res => res.ok ? res : Promise.reject(res))
            .then(res => {
                this.setState({
                    isLoaded: true,
                    error: false
                })
            })
            .catch(() => {
                    this.setState({
                            isLoaded: true,
                            error: true
                        }
                    );
                }
            )
    }

    render() {
        return (
            <>

                <Container style={{width: '400px', marginTop: '80px'}}>
                    <h1 className="text-center">Добавить датчик</h1>
                    <Form className="mt-4">

                        <Form.Label>Название датчика</Form.Label>
                        <Form.Control type="text" id="name" ref="name"/>

                        <Form.Label>Тип датчика</Form.Label>
                        <Form.Control type="text" id="type" ref="type"/>


                        <button className="btn btn-outline-primary float-end mt-2" onClick={this.sendData}>Отправить</button>

                        <div style={{marginTop: '60px'}}>
                            {this.state.isLoaded ?
                                (this.state.error == false)
                                    ? <Alert variant="success">Датчик успешно добавлен!</Alert>
                                    :<Alert variant="danger">Ошибка!</Alert>
                                : <></>
                            }
                        </div>

                    </Form>
                </Container>
            </>
        )
    }
}