import React, { Dispatch, FC } from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import OrderCard from '../OrderCard/OrderCard';
import { Order } from '../../../database/schemas/order_schema';
import './Backlog.css';
import { OrderReducerAction } from '../../types/orders';
import { DroneReducerAction } from '../../types/drone';

interface BacklogProps {
  orders: Order[],
  updateOrders: Dispatch<OrderReducerAction>,
  updateDrones: Dispatch<DroneReducerAction>,
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
        <OrderCard order={order} orders={props.orders} updateOrders={props.updateOrders} updateDrones={props.updateDrones}/>
      </Accordion.Item>
    ))
    }
  </Accordion>
);

export default Backlog;
