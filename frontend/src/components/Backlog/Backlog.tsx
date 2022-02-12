import React, { FC } from 'react';
import { Accordion, Container, Row, Col, Button } from 'react-bootstrap';
import OrderCard from '../OrderCard/OrderCard';
import { order_1, order_2 } from "../../sample_data";
import './Backlog.css';

const orders = [order_1, order_2]
interface BacklogProps {}

const Backlog: FC<BacklogProps> = () => (
  <Accordion className="Backlog">
    {orders.map((order, ind) => (
    <Accordion.Item eventKey={String(ind)}>
        <Accordion.Header>
          <Container>
            <Row>
              <Col>
                Order {String(ind)}
              </Col>
              <Col>
                <div onClick={e=>e.stopPropagation()}>
                  <Button>Done</Button>
                </div>
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
