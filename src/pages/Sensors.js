import React, {Component} from "react";
import {Container, Form, Button} from "react-bootstrap";
import Table from "../components/Table";

function TableBanner(props) {
    if (!props.code) {return null}
    return <div className="warning">Ошибка!</div>

}

export default class Sensors extends Component{
    constructor(props) {
        super(props)
        this.state = { showTable: true }
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }

    handleToggleClick() {
        this.setState((state) => ({
            showTable: !state.showTable,
        }))
    }
        render() {
        return (
            <>
            <Container style={{width: '500px'}}>
                <h1 className="text-center">Введите данные</h1>
                <Form>

                    <Form.Group controlId="formBasicValue">
                        <Form.Label>Введите значение</Form.Label>
                        <Form.Control as="textarea" rows="1"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicStartDateTime">
                        <Form.Label>Дата начала</Form.Label>
                        <Form.Control type="date" placeholder="Введите дату и время Начала"/>
                        <Form.Control type="time" placeholder="Введите время Начала"/>
                        <Form.Text>
                            Выберите дату и время Начала
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicEndDateTime">
                        <Form.Label>Дата конца</Form.Label>
                        <Form.Control type="date" placeholder="Введите дату и время Конца"/>
                        <Form.Control type="time" placeholder="Введите время Конца"/>
                        <Form.Text>
                            Введите дату и время Конца
                        </Form.Text>
                    </Form.Group>

                    {/*<div className="text-center">
                        <TableBanner code={this.state.showTable}/>
                    <button type="submit" className="btn btn-outline-primary " onClick={this.handleToggleClick} >Отправить</button>
                        {this.state.showTable ? <Table/> : null}
                    </div>*/}
                </Form>
            </Container>

                <Container>
                    <div className="text-center">
                        <TableBanner code={this.state.showTable}/>
                        <button type="submit" className="btn btn-outline-primary " onClick={this.handleToggleClick} >Отправить</button>
                        {this.state.showTable ? <Table/> : null}
                    </div>
                    {/*<h2 className="text-center m-4">Результат</h2>
                    <Table />*/}
                </Container>


            </>
        )
    }
}