import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import supe from '../assets/supe.jpg'

export default class CarouselBox extends Component{
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={supe}
                        alt="Arduino1"
                    />
                    <Carousel.Caption>
                        <h3>SAS project</h3>
                        <p>Платформа, предоставляющая простой способ сохранить ваши данные и визуализировать их</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={supe}
                        alt="Pope"
                    />
                    <Carousel.Caption>
                        <h3>Добавляй датчики</h3>
                        <p>Текст-инструкция по добавлению</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={supe}
                        alt="supe"
                    />
                    <Carousel.Caption>
                        <h3>Отправляй данные</h3>
                        <p>Текст-инструкция по отправке</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={supe}
                        alt="supe"
                    />
                    <Carousel.Caption>
                        <h3>Визуализируй</h3>
                        <p>Текст-инструкция по визуализации</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={supe}
                        alt="supe"
                    />
                    <Carousel.Caption>
                        <h3>СТASS</h3>
                        <p>Текст для слайда</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}