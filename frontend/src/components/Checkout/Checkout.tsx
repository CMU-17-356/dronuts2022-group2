import { Dispatch, FC } from 'react';
import Cart from '../Cart/Cart';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import PaymentInfo from '../PaymentInfo/PaymentInfo';
import './Checkout.css';
import { UserCart, CartReducerAction } from '../../types/userCart';

interface CheckoutProps {
  userCart: UserCart,
  updateCart: Dispatch<CartReducerAction>,
}

const Checkout: FC<CheckoutProps> = (props) => (
  <div className="Checkout">
    <div className='flex-container'>
        <Cart userCart={props.userCart} updateCart={props.updateCart}></Cart>
        <div className = 'sidebar'>
            <div className = 'infoForm'>
                <DeliveryInfo></DeliveryInfo>
            </div>
            <div className = 'infoForm'>
                <PaymentInfo></PaymentInfo>
            </div>
        </div>
    </div>
  </div>
);

export default Checkout;
