import React, {Component} from "react";
import {Container, Form, Button} from "react-bootstrap";
import Table from "../components/Table";

function TableBanner(props) {
    if (!props.code) {return null}
    return <div className="warning"></div>

}

export default class Sensors extends Component{
    constructor(props) {
        super(props)
        this.state = { showTable: true, items: [], errorText: ""}
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {

        let start = new Date(this.refs.d1.value + " " + this.refs.t1.value);
        let end = new Date(this.refs.d2.value + " " + this.refs.t2.value);

        start = (start == 'Invalid Date') ? 0 : start.getTime();
        end = (end == 'Invalid Date') ? Number.MAX_SAFE_INTEGER : end.getTime();

        console.log(start);
        console.log(end);

        let request = new Request("http://3.142.115.21/sensors/1/data?start=" + start + "&end=" + end);
        fetch(request)
            .then(res => res.json())
            .then(
                (result) => {

                    if(result.code == 0){

                        let keys = Object.keys(result.data)
                        let values = Object.values(result.data)

                        let data = [];
                        for(let i = 0; i < keys.length; i++) data.push({"time": (new Date(parseInt(keys[i])).toLocaleString()), "value": values[i]})

                        this.setState({
                            showTable: true,
                            items: data,
                            errorText: ""
                        });
                    }else {
                        this.setState({
                            showTable: false,
                            items: [],
                            errorText: result.error
                        });
                    }


                },
                (error) => {
                    this.setState({
                        showTable: false,
                        items: [],
                        errorText: "Ошибка при отправке"
                    });
                }
            )


        // this.setState((state) => ({
        //     showTable: !state.showTable,
        // }))
    }
    render() {
        return (
            <>
                <Container style={{width: '500px'}}>
                    <h1 className="text-center">Введите данные</h1>
                    <Form>

                        {/*<Form.Group controlId="formBasicValue">*/}
                        {/*    <Form.Label>Введите значение</Form.Label>*/}
                        {/*    <Form.Control as="textarea" rows="1"/>*/}
                        {/*</Form.Group>*/}

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
                    </Form>
                </Container>

                <Container>
                    <div className="text-center">
                        <TableBanner code={this.state.showTable} errorText={this.state.errorText}/>
                        <button type="submit" className="btn btn-outline-primary " onClick={this.handleToggleClick} >Отправить</button>
                        {/*{this.state.showTable ? <Table data={this.state.items}/> : null}*/}

                        <Table data={this.state.items}/>
                    </div>
                </Container>
            </>
        )
    }
}