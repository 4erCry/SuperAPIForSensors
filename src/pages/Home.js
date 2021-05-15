import React, {Component} from "react";
import CarouselBox from "../components/CarouselBox";
import { Container} from "react-bootstrap";

export default function  Home() {

        return (
            <>
                <CarouselBox style={{'margin-top': '56px'}}/>
                <Container>
                    <h2 className="text-center m-4">Информация о команде</h2>
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src="https://sun4-15.userapi.com/s/v1/if1/JxY5Hnfs_eXJ6it5YWOWgve3zrdPNv1JpYKOwQCRgs9yxe3ei-sW60DC6vwhiQ8thOl9kItV.jpg?size=200x0&quality=96&crop=118,0,695,695&ava=1" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="text-center">Шевяков Илья</h5>
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="https://sun4-15.userapi.com/s/v1/if1/wSKDSJzfuEgIIVUKhl56WlC0ydN4cjVlGga60f0gzqcB7RFPkAXDCucMS7AbPsy14xaXqqog.jpg?size=200x0&quality=96&crop=469,0,1707,1707&ava=1" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="text-center">Кузеванов Владислав</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                    additional content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="https://sun4-16.userapi.com/s/v1/ig2/4O4DfJ6Ib46HZhtuzaJYIj_RsfPo-d1rQc_IkTrjfUk4aQvpsKeYTVLWjDTe4DFIWDDshyLo-pESgYDiHYP-SJMy.jpg?size=200x0&quality=96&crop=0,0,1080,1080&ava=1" alt="Card image cap"/>
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
                            <img className="card-img-top" src="https://sun4-15.userapi.com/s/v1/if1/1M3R8u-akQgkDv5iX9V3pwAHcYcVZ2BmmcWlb-dGsq-cdNTQ6ztJVThdQt6LHDi2CNK-buUD.jpg?size=200x0&quality=96&crop=0,87,553,553&ava=1" alt="Card image cap"/>
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