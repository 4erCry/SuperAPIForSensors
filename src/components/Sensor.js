import React, {Component} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import { Line } from 'react-chartjs-2';
import authHeader from "./authHeader";

export default class Sensor extends Component{

    constructor(props) {
        super(props)
        this.state = {
            houseId: parseInt(props.match.params.houseId, 10),
            roomId: parseInt(props.match.params.roomId, 10),
            sensorId: parseInt(props.match.params.sensorId, 10),
            error: '',
            isLoaded: false,
            name: '',
            items: [],
        }
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    compare(a, b) {
        if (a.x < b.x ) {
            return -1;
        }
        if (a.x > b.x) {
            return 1;
        }
        return 0;
    }

    handleToggleClick(e) {
        console.log(this)
        e.preventDefault()
        console.log(this)
        let start = new Date(this.refs.d1.value + " " + this.refs.t1.value);
        let end = new Date(this.refs.d2.value + " " + this.refs.t2.value);

        start = (start == 'Invalid Date') ? 0 : start.getTime();
        end = (end == 'Invalid Date') ? Number.MAX_SAFE_INTEGER : end.getTime();

        console.log(start);
        console.log(end);

        let request = new Request('http://3.142.115.21/sensors/'
            + this.state.sensorId + '/data?start=' + start + '&end=' + end);
        fetch(request)
            .then(res => res.json())
            .then(
                (result) => {

                    if(result.code === 0){

                        let keys = Object.keys(result.data)
                        let values = Object.values(result.data)

                        let data = [];
                        for(let i = 0; i < keys.length; i++)
                            data.push({"x": (new Date(parseInt(keys[i])).toLocaleString()), "y": values[i]})
                        data.sort(this.compare)

                        this.setState({
                            items: data,
                        });
                    } else {
                        this.setState({
                            items: [],
                        });
                    }

                    this.refs.line.data = this.state.items
                }
            )
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
            + this.state.houseId + '/rooms/' + this.state.roomId + '/sensors/' + this.state.sensorId, options)
        fetch(request)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: false,
                        name: result.name,
                    });



                    request = new Request('http://3.142.115.21/houses/'
                        + this.state.houseId + '/rooms/' + this.state.roomId + '/sensors/'
                        + this.state.sensorId + '/data', options)
                    fetch(request)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                let keys = Object.keys(result.data)
                                let values = Object.values(result.data)

                                let data = []
                                for(let i = 0; i < keys.length; i++)
                                    data.push({"x": (new Date(parseInt(keys[i])).toLocaleString()), "y": values[i]})
                                data.sort(this.compare)

                                this.setState({
                                    isLoaded: true,
                                    items: data
                                })
                            })
                })
    }

    render() {

        const data = {
            datasets: [
                {
                    label: 'Значения',
                    data: this.state.items,
                    fill: false,
                    backgroundColor: '#0d6efd',
                    borderColor: 'rgba(13, 110, 253, 0.2)',
                },
            ],
        };

        const options = {
            scales: {
                yAxes: [
                    {
                    },
                ],
                xAxes: [{
                    type: 'time',
                }]
            },
        };



        return (
            <>
                <Container style={{width: '800px', marginTop: '80px'}}>
                    <Row>
                        <Col>
                            <h1 className="d-inline">{this.state.name}(id: {this.state.sensorId})</h1>
                        </Col>
                    </Row>

                    {/*{cont}*/}

                    <div style={{marginTop: '80px'}}>
                        <div className='header'>
                            <h1 className='title'>Данные</h1>
                        </div>
                        <Line data={data} options={options} ref="line"/>
                    </div>


                    <Container style={{width: '500px', marginTop: '60px'}}>
                        <Form>

                            <Form.Group controlId="formBasicStartDateTime">
                                <Form.Label>Дата начала</Form.Label>
                                <Form.Control ref="d1" type="date" placeholder="Введите дату и время Начала"/>
                                <Form.Control ref="t1" type="time" placeholder="Введите время Начала"/>
                                <Form.Text>
                                    Выберите дату и время Начала
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEndDateTime">
                                <Form.Label>Дата конца</Form.Label>
                                <Form.Control ref="d2" type="date" placeholder="Введите дату и время Конца"/>
                                <Form.Control ref="t2" type="time" placeholder="Введите время Конца"/>
                                <Form.Text>
                                    Введите дату и время Конца
                                </Form.Text>
                            </Form.Group>

                            <button type="submit" className="btn btn-outline-primary float-end"
                                    style={{marginBottom: '60px'}} onClick={this.handleToggleClick} >Отправить</button>
                        </Form>
                    </Container>
                </Container>
            </>
        )
    }
}