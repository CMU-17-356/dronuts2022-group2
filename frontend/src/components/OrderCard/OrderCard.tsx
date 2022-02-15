import React, { FC } from 'react';
import { Accordion, Col, Container, Row, Image, Button } from 'react-bootstrap';
import { Order } from "../../../database/schemas/order_schema";
import './OrderCard.css';

interface OrderCardProps {order: Order}

const OrderCard: FC<OrderCardProps> = (props) => (
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
          <Button>Send to drone</Button>
        </div>
          </Col>
          </Row>
    </Container>
    </Accordion.Body>
  </div>
);

export default OrderCard;
