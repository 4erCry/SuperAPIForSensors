import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import authHeader from "../components/authHeader";

export default class Sensors extends Component{

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            houses: [],
            items: [],
            counter: 0
        };
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
        console.log(options)
        let request = new Request("http://3.142.115.21/houses", options)
        fetch(request)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        houses: result.houses
                    });

                    if(this.state.houses.length == 0){
                        this.setState({isLoaded: true})
                        return
                    }

                    this.state.counter = 0
                    for (let house of this.state.houses) {
                        request = new Request('http://3.142.115.21/houses/' + house, options)
                        fetch(request)
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    this.state.counter += 1
                                    this.state.items = [...this.state.items, {
                                        id: house, name: result.house_name, color: result.house_color}]
                                    if(this.state.counter == this.state.houses.length) {
                                        this.setState({
                                            isLoaded: true
                                        })
                                    }
                                })
                    }},
                )
    }

    render() {

        const { error, isLoaded, items } = this.state;
        let cont;
        if (error) {
            cont = <div>Ошибка: {error}</div>;
        } else if (!isLoaded) {
            cont = <div>Загрузка...</div>;
        } else {
            cont =
                <div className="card-deck">
                    <ul style={{ marginTop: '40px'}}>
                    {items.map(item => (

                        <div class="key={item.id}">
                            <h4><a href={"/table/" + item.id} style={{textDecoration: "none"}}>{item.name}</a></h4>
                        </div>
                    ))}
                </ul>
                </div>
        }

        return (
            <>

                <Container style={{width: '600px', height: '800px', marginTop: '80px'}}>
                    <Row>
                        <Col>
                            <h1 className="d-inline">Дома:</h1>
                            <a href={"/table/addHouse"}>
                                <button className="btn btn-outline-primary float-end">Добавить дом</button></a>
                        </Col>
                    </Row>

                    {cont}

                </Container>
            </>
        )
    }
}