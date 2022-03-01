import React, { FC } from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import OrderCard from '../OrderCard/OrderCard';
import { Order } from "../../../database/schemas/order_schema";
import './Backlog.css';

interface BacklogProps {
  'orders': Order[]
}

const Backlog: FC<BacklogProps> = (props) => (
  <Accordion className="Backlog">
    {props.orders.map((order, ind) => (
    <Accordion.Item key={ind} eventKey={String(ind)}>
        <Accordion.Header>
          <Container>
            <Row>
              <Col>
                Order {String(ind)}
              </Col>
            </Row>
          </Container>


        </Accordion.Header>
        <OrderCard order={order} />
      </Accordion.Item>
    ))
    }
  </Accordion>
);

export default Backlog;
