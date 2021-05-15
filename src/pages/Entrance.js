import React, {Component, useState} from "react";
import {Container, Form, Button} from "react-bootstrap";


export default function Entrance(){

    /*const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);*/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(false);
    const signOut=()=>setUser(false);
    const signIn=()=>setUser(true);

    return (
        <>
            <Container style={{width: '500px'}}>
                <h1 className="text-center">Введите данные</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>EMAIL</Form.Label>
                        <Form.Control onChange={()=> setEmail(email)} type="email"
                                      placeholder="Введите email"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>ПАРОЛЬ</Form.Label>
                        <Form.Control onChange={()=> setPassword(password)} type="password"
                                      placeholder="Введите пароль"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Запомнить меня"/>
                    </Form.Group>

                    <Button type="button" onClick={signIn} className="primary">Отправить</Button>

                </Form>
            </Container>

        </>
    )

}