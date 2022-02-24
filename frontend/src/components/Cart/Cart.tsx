import { FC, Dispatch } from 'react';
import DonutCard from '../DonutCard/DonutCard';
import './Cart.css';
import { Donut } from '../../../database/schemas/donut_schema'
import { UserCart, CartReducerAction } from '../../types/userCart';

interface CartProps {
  userCart: UserCart,
  updateCart: Dispatch<CartReducerAction>,
}

const Cart: FC<CartProps> = (props: CartProps) => {
  const cartCards = props.userCart.donuts.map((donut: Donut, ind) =>
    <DonutCard key={donut.name} donut={donut} initalQuantity={props.userCart.quantities[ind]} updateCart={props.updateCart}></DonutCard>);
  return (
    <div className="Cart">
      {cartCards}
    </div>
  );
}

export default Cart;
