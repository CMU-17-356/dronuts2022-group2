import React, { FC } from 'react';
import DoughnutCartCard from '../DoughnutCartCard/DoughnutCartCard';
import './Cart.css';

interface CartProps {}

const Cart: FC<CartProps> = () => (
  <div className="Cart">
    Cart Component
    <DoughnutCartCard></DoughnutCartCard>
  </div>
);

export default Cart;
