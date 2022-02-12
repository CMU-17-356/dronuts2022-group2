import React, { FC } from 'react';
import DonutMenuCard from '../DonutMenuCard/DonutMenuCard';
import './OrderMenu.css';

interface OrderMenuProps {}

const OrderMenu: FC<OrderMenuProps> = () => (
  <div className="OrderMenu">
    OrderMenu Component
    A list of donut menu items
    <DonutMenuCard></DonutMenuCard>
  </div>
);

export default OrderMenu;
