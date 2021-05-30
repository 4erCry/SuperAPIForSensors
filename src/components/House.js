import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import authHeader from "./authHeader";

export default class House extends Component{

    constructor(props) {
        super(props)
        this.state = {
            id: parseInt(props.match.params.houseId, 10),
            error: '',
            isLoaded: false,
            name: '',
            color: '',
            rooms: [],
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

        let request = new Request('http://3.142.115.21/houses/' + this.state.id, options)
        fetch(request)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: false,
                        name: result.house_name,
                        color: result.house_color
                    });

                    request = new Request('http://3.142.115.21/houses/' + this.state.id + '/rooms', options)
                    fetch(request)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    isLoaded: false,
                                    rooms: result.rooms
                                });

                                if(this.state.rooms.length == 0){
                                    this.setState({isLoaded: true})
                                    return
                                }

                                this.state.counter = 0
                                for (let room of this.state.rooms) {
                                    request = new Request('http://3.142.115.21/houses/' + this.state.id + '/rooms/' + room, options)
                                    fetch(request)
                                        .then(res => res.json())
                                        .then(
                                            (result) => {
                                                this.state.counter += 1
                                                console.log(this.state.counter)
                                                this.state.items = [...this.state.items, {id: room, name: result.room_name, color: result.room_color}]
                                                if(this.state.counter == this.state.rooms.length) {
                                                    this.setState({
                                                        isLoaded: true
                                                    })
                                                }
                                            })
                                }},
                            )
                })
    }

    render() {

        const { id, error, isLoaded, name, color, rooms, items } = this.state;
        let cont;
        if (error) {
            cont = <div>Ошибка: {error}</div>;
        } else if (!isLoaded) {
            cont = <div>Загрузка...</div>;
        } else {
            cont =
                <ul style={{marginTop: '40px'}}>
                    {items.map(item => (
                        <li key={item.id}>
                            <h4><a href={"/table/" + id + '/' + item.id} style={{textDecoration: "none"}}>{item.name}</a></h4>
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
                            <a href={'/table/' + id + '/addRoom'}><button className="btn btn-outline-primary float-end">Добавить комнату</button></a>
                        </Col>
                    </Row>

                    {cont}
                </Container>
            </>
        )
    }
}