import React, { Dispatch,FC } from 'react';
import { Accordion, Col, Container, Row, Image, Button } from 'react-bootstrap';
import { Order } from "../../../database/schemas/order_schema";
import './OrderCard.css';
import { OrderReducerAction } from '../../types/orders';

interface OrderCardProps {
    order: Order
    'orders': Order[]
    updateOrders: Dispatch<OrderReducerAction>,
}

const OrderCard: FC<OrderCardProps> = (props) => {
    const assignDrone = () => {
        let index = props.orders.indexOf(props.order);
        props.updateOrders({ 'name': 'remove', 'removeInd': index });
    }

    return (
    <div className="OrderCard">
        <Accordion.Body>
            <Container>
                <Row>
                    <Col xs={10}>
                        {props.order.donuts.map((donut, ind) => (
                            <Row key={ind}>
                                <Col xs={4}>
                                    <Image src={String(donut.imageurl)} />
                                </Col>
                                <Col xs={4}>
                                    <h3>{donut.name}</h3>
                                </Col>
                                <Col xs={4}>
                                    <p>x{props.order.quantities[ind]}</p>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    <Col xs={2}>
                        <div onClick={e=>e.stopPropagation()}>
                            <Button onClick={assignDrone}>Send to drone</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Accordion.Body>
    </div>
    )
};

export default OrderCard;
