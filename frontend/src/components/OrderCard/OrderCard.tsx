import React, { FC } from 'react';
import { Accordion, Col, Container, Row, Image } from 'react-bootstrap';
import { Order } from "../../types";
import './OrderCard.css';

interface OrderCardProps {order: Order}

const OrderCard: FC<OrderCardProps> = (props) => (
  <div className="OrderCard">
    <Accordion.Body>
      {props.order.donuts.map((donut, ind) => (
          <Container>
            <Row>
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
          </Container>
      ))
    }
    </Accordion.Body>
  </div>
);

export default OrderCard;
