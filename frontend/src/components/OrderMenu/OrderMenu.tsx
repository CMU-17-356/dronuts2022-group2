import { Dispatch, FC, Reducer } from 'react';
import DonutCard from '../DonutCard/DonutCard';
import './OrderMenu.css';
import { Container, Row, Col } from 'react-bootstrap';
import { donuts } from '../../sample_data'
import { Donut } from '../../../database/schemas/donut_schema'
import { UserCart, CartReducerAction } from '../../types/userCart';

interface OrderMenuProps {
  userCart: UserCart,
  updateCart: Dispatch<CartReducerAction>,
}

const get_init_donut_quantity = (cart: UserCart, donut: Donut) => {
  let init_q = 0
  for (let i = 0; i < cart.donuts.length; i++) {
    if (cart.donuts[i].name == donut.name) {
      init_q = cart.quantities[i];
    }
  }
  return init_q
}

const OrderMenu: FC<OrderMenuProps> = (props) => {
  const menuCards = donuts.map((donut: Donut) =>
    <DonutCard key={donut.name} donut={donut} initalQuantity={get_init_donut_quantity(props.userCart, donut)} updateCart={props.updateCart}></DonutCard>);

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
