import React from 'react';
import { FC, Dispatch } from 'react';
import DonutCard from '../DonutCard/DonutCard';
import './Cart.css';
import { UserCart, CartReducerAction, DonutOrder } from '../../types/userCart';

interface CartProps {
  userCart: UserCart,
  updateCart: Dispatch<CartReducerAction>,
}

const Cart: FC<CartProps> = (props: CartProps) => {
  const cartCards = props.userCart.donut_orders.map((order: DonutOrder) =>
    <DonutCard key={order.donut.name} donut={order.donut} initalQuantity={order.quantity} updateCart={props.updateCart}></DonutCard>);
  return (
    <div className="Cart">
      {cartCards}
    </div>
  );
};

export default Cart;
