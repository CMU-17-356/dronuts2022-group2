import React, { FC } from 'react';
import DoughnutCartCard from '../DoughnutCartCard/DoughnutCartCard';
import './Cart.css';

interface CartProps {}

const Cart: FC<CartProps> = () => (
  <div className="Cart">
    <DoughnutCartCard></DoughnutCartCard>
  </div>
);

export default Cart;
