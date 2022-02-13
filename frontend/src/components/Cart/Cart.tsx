import { FC } from 'react';
import DonutCartCard from '../DonutCartCard/DonutCartCard';
import './Cart.css';
import { Donut } from '../../types'

interface CartProps {
  donuts : Donut[]
}

const Cart: FC<CartProps> = (props : CartProps) => {
  const cartCards = props.donuts.map((donut : Donut) => <DonutCartCard key={donut.name} donut={donut}></DonutCartCard>);
  return (
    <div className="Cart">
      {cartCards}
    </div>
  );
}

export default Cart;
