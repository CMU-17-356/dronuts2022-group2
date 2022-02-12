import React, { FC } from 'react';
import DonutMenuCard from '../DonutMenuCard/DonutMenuCard';
import './OrderMenu.css';
import { donuts } from '../../sample_data'
import { Donut } from '../../types'

interface OrderMenuProps {}

const OrderMenu: FC<OrderMenuProps> = () => {

  const menuCards = donuts.map((donut : Donut) => <DonutMenuCard donut={donut}></DonutMenuCard>);

  return (
  <div className="OrderMenu">
    OrderMenu Component
    A list of donut menu items
    {menuCards}
  </div>
  );
}

export default OrderMenu;
