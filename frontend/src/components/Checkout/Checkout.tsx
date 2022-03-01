import { Dispatch, FC } from 'react';
import Cart from '../Cart/Cart';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import PaymentInfo from '../PaymentInfo/PaymentInfo';
import './Checkout.css';
import { UserCart, CartReducerAction } from '../../types/userCart';
import { Form } from 'react-bootstrap'
import { Address } from '../../../database/schemas/address_schema'
import { Donut } from '../../../database/schemas/donut_schema'
import { Order } from '../../../database/schemas/order_schema'
import { customer_1 } from '../../sample_data'

interface CheckoutProps {
  userCart: UserCart,
  updateCart: Dispatch<CartReducerAction>,
}

const Checkout: FC<CheckoutProps> = (props) => {

  const submitForm = (e) => {
    const name = e.target.formName.value
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
    const order_out: Order = {
      'order_id': Math.floor(Math.random() * 1000),
      'user': customer_1,
      'price': price,
      'donuts': donuts,
      'quantities': quantities,
      "destination": address
    }
    console.log(order_out)
    e?.preventDefault()
  }

  return (
    <div className="Checkout">
      <div className='flex-container'>
        <Cart userCart={props.userCart} updateCart={props.updateCart}></Cart>
        <div className='infoForm'>
          <Form onSubmit={submitForm}>
            <div className='sidebar'>
              <DeliveryInfo></DeliveryInfo>
            </div>
            <div className='infoForm'>
              <PaymentInfo></PaymentInfo>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
