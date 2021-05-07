import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import arduino from '../assets/arduino.jpg'
import pope from '../assets/popopend.jpg'
import supe from '../assets/supe.jpg'

export default class CarouselBox extends Component{
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={arduino}
                        alt="Arduino1"
                    />
                    <Carousel.Caption>
                        <h3>Датчик Движения</h3>
                        <p>Текст для слайда</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pope}
                        alt="Pope"
                    />
                    <Carousel.Caption>
                        <h3>Popoland</h3>
                        <p>Текст для слайда</p>
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