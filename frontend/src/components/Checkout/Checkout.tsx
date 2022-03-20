import { Dispatch, FC, useState } from 'react';
import Cart from '../Cart/Cart';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import PaymentInfo from '../PaymentInfo/PaymentInfo';
import './Checkout.css';
import { UserCart, CartReducerAction } from '../../types/userCart';
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Address } from '../../../database/schemas/address_schema'
import { Donut } from '../../../database/schemas/donut_schema'
import { Order } from '../../../database/schemas/order_schema'
import { customer_1 } from '../../sample_data'
import { OrderReducerAction } from '../../types/orders';

interface CheckoutProps {
  userCart: UserCart,
  updateCart: Dispatch<CartReducerAction>,
  updateOrders: Dispatch<OrderReducerAction>,
}

const Checkout: FC<CheckoutProps> = (props) => {
  const [noti, setNoti] = useState("")
  const submitForm = (e) => {
    const street = e.target.formStreetAddress.value
    const city = e.target.formCity.value
    const state = e.target.formState.value
    const zip = e.target.formZip.value
    const address: Address = {
      'street': street,
      'city': city,
      'state': state,
      'zip': zip,
    }
    const donut_orders = props.userCart.donut_orders
    const donuts: Donut[] = []
    const quantities: number[] = []
    let price = 0
    for (let x of donut_orders) {
      donuts.push(x.donut);
      quantities.push(x.quantity);
      price += x.donut.price * x.quantity
    }
    setNoti("Order recieved!")
    const order_out: Order = {
      'order_id': Math.floor(Math.random() * 1000),
      'user': customer_1,
      'price': price,
      'donuts': donuts,
      'quantities': quantities,
      "destination": address
    }
    props.updateOrders({ 'name': 'add', 'order': order_out });
    props.updateCart({ name: 'clear' })
    e?.preventDefault()
  }

  return (
    <div className="Checkout">
        <Container>
            {noti}
          <Row>
            <Col xs={6}>
              <Cart userCart={props.userCart} updateCart={props.updateCart}></Cart>
          </Col>
            <Col xs={6}>
              <div className='infoForm'>
                <Form onSubmit={submitForm}>
                    <DeliveryInfo></DeliveryInfo>
                    <PaymentInfo></PaymentInfo>
                </Form>
              </div>
            </Col>
        </Row>
            {noti}
        </Container>
    </div>
  );
}

export default Checkout;
