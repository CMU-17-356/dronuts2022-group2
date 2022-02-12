import React, { FC } from 'react';
import DonutMenuCard from '../DonutMenuCard/DonutMenuCard';
import './OrderMenu.css';
import { Container, Row, Col } from 'react-bootstrap';
import { donuts } from '../../sample_data'
import { Donut } from '../../types'

interface OrderMenuProps {}

const OrderMenu: FC<OrderMenuProps> = () => {

  const menuCards = donuts.map((donut : Donut) => <DonutMenuCard donut={donut}></DonutMenuCard>);

  return (
    <div className="OrderMenu">
      <Container>
        <Row xs={1} md={4}>
          {menuCards.map((menuCard) => <Col> {menuCard} </Col>)}
        </Row>
      </Container>
    </div>
  );
}

export default OrderMenu;
