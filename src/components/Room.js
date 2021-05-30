import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import authHeader from "./authHeader";

export default class Room extends Component{

    constructor(props) {
        super(props)
        this.state = {
            houseId: parseInt(props.match.params.houseId, 10),
            roomId: parseInt(props.match.params.roomId, 10),
            error: '',
            isLoaded: false,
            name: '',
            sensors: [],
            items: [],
            counter: 0
        }
    }

    componentDidMount() {
        let options = {
            Method: 'GET',
            headers: Object.assign(authHeader(), {
                'Access-Control-Allow-Origin': 'http://3.142.115.21',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            })
        }
        let request = new Request('http://3.142.115.21/houses/'
            + this.state.houseId + '/rooms/' + this.state.roomId, options)
        fetch(request)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: false,
                        name: result.room_name,
                        color: result.room_color,
                        sensors: result.sensors
                    });

                    if(this.state.sensors.length == 0){
                        this.setState({isLoaded: true})
                        return
                    }

                    this.state.counter = 0
                    for (let sensor of this.state.sensors) {
                        request = new Request('http://3.142.115.21/houses/'
                            + this.state.houseId + '/rooms/' + this.state.roomId + '/sensors/' + sensor, options)
                        fetch(request)
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    this.state.counter += 1
                                    this.state.items = [...this.state.items, {id: sensor, name: result.name}]

                                    if(this.state.counter == this.state.sensors.length) {
                                        this.setState({
                                            isLoaded: true
                                        })
                                    }
                                }
                                )
                    }
                }
                )
    }

    render() {

        const { houseId, roomId, error, isLoaded, name, sensors, items } = this.state;
        let cont;
        if (error) {
            cont = <div> Ошибка : {error}</div>;
        } else if (!isLoaded) {
            cont = <div> Загрузка... </div>;
        } else {
            cont =
                <ul style={{marginTop: '40px'}}>
                    {items.map(item => (
                        <li key={item.id}>
                            <h4><a href={"/table/" + houseId + '/' + roomId + '/' + item.id}
                                   style={{textDecoration: "none"}}>{item.name}</a></h4>
                        </li>
                    ))}
                </ul>
        }

        return (
            <>

                <Container style={{width: '600px', marginTop: '80px'}}>
                    <Row>
                        <Col>
                            <h1 className="d-inline">{name}</h1>
                            <a href={'/table/' + houseId + '/' + roomId + '/addSensor'}>
                                <button className="btn btn-outline-primary float-end">Добавить датчик</button></a>
                        </Col>
                    </Row>

                    {cont}
                </Container>
            </>
        )
    }
}