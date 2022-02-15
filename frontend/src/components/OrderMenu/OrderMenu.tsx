import { FC } from 'react';
import DonutMenuCard from '../DonutMenuCard/DonutMenuCard';
import './OrderMenu.css';
import { Container, Row, Col } from 'react-bootstrap';
import { donuts } from '../../sample_data'
import { Donut } from '../../../database/schemas/donut_schema'

interface OrderMenuProps {}

const OrderMenu: FC<OrderMenuProps> = () => {

  const menuCards = donuts.map((donut : Donut) => <DonutMenuCard key={donut.name} donut={donut}></DonutMenuCard>);

  return (
    <div className="OrderMenu">
      <Container>
        <Row xs={1} md={4}>
          {menuCards.map((menuCard, i) => <Col key={i}> {menuCard} </Col>)}
        </Row>
      </Container>
    </div>
  );
}

export default OrderMenu;
