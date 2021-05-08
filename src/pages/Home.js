import React, {Component} from "react";
import CarouselBox from "../components/CarouselBox";
import { Container} from "react-bootstrap";

export default class Home extends Component{
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Информация о команде</h2>
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src="https://sun9-40.userapi.com/impg/EBTqQCz9wmaFWevQG33rYAoDosr_Q2rUWELCfg/2wwG2xNJ84I.jpg?size=750x750&quality=96&sign=b89cddbc665090c576b1a6f42f53d753&type=album" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="text-center">Шевяков Илья</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="https://sun9-40.userapi.com/impg/EBTqQCz9wmaFWevQG33rYAoDosr_Q2rUWELCfg/2wwG2xNJ84I.jpg?size=750x750&quality=96&sign=b89cddbc665090c576b1a6f42f53d753&type=album" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="text-center">Кузеванов Владислав</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to
                                        additional content.</p>
                                </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="https://sun9-40.userapi.com/impg/EBTqQCz9wmaFWevQG33rYAoDosr_Q2rUWELCfg/2wwG2xNJ84I.jpg?size=750x750&quality=96&sign=b89cddbc665090c576b1a6f42f53d753&type=album" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="text-center">Кригер Виктория</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This card has even longer content than
                                        the first to show that equal height action.</p>
                                </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="https://sun9-40.userapi.com/impg/EBTqQCz9wmaFWevQG33rYAoDosr_Q2rUWELCfg/2wwG2xNJ84I.jpg?size=750x750&quality=96&sign=b89cddbc665090c576b1a6f42f53d753&type=album" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="text-center">Зеленских Марк</h5>
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This card has even longer content than
                                    the first to show that equal height action.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="https://sun9-40.userapi.com/impg/EBTqQCz9wmaFWevQG33rYAoDosr_Q2rUWELCfg/2wwG2xNJ84I.jpg?size=750x750&quality=96&sign=b89cddbc665090c576b1a6f42f53d753&type=album" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="text-center">Дроздов Никита</h5>
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This card has even longer content than
                                    the first to show that equal height action.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}