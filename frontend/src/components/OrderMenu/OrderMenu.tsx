import { Dispatch, FC } from 'react';
import DonutCard from '../DonutCard/DonutCard';
import './OrderMenu.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { donuts } from '../../sample_data'
import { Donut } from '../../../database/schemas/donut_schema'
import { UserCart, CartReducerAction } from '../../types/userCart';

interface OrderMenuProps {
  userCart: UserCart,
  updateCart: Dispatch<CartReducerAction>,
  donuts: Donut[],
}

const get_init_donut_quantity = (cart: UserCart, donut: Donut) => {
  let init_q = 0
  for (let order of cart.donut_orders) {
    if (order.donut.name === donut.name) {
      init_q = order.quantity;
    }
  }
  return init_q
}

const OrderMenu: FC<OrderMenuProps> = (props) => {
  const menuCards = props.donuts.map((donut: Donut) =>
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
