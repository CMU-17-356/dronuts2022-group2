import React, { FC } from 'react';
import Cart from '../Cart/Cart';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import PaymentInfo from '../PaymentInfo/PaymentInfo';
import './Checkout.css';

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = () => (
  <div className="Checkout">
    Checkout Component
    <Cart></Cart>
    <DeliveryInfo></DeliveryInfo>
    <PaymentInfo></PaymentInfo>
  </div>
);

export default Checkout;
