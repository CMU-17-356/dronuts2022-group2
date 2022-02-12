import React, { FC } from 'react';
import DonutCartCard from '../DonutCartCard/DonutCartCard';
import './Cart.css';

interface CartProps {}

const Cart: FC<CartProps> = () => (
  <div className="Cart">
    <DonutCartCard></DonutCartCard>
  </div>
);

export default Cart;
