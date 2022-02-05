import React, { FC } from 'react';
import DoughnutMenuCard from '../DoughnutMenuCard/DoughnutMenuCard';
import './OrderMenu.css';

interface OrderMenuProps {}

const OrderMenu: FC<OrderMenuProps> = () => (
  <div className="OrderMenu">
    OrderMenu Component
    A list of doughnut menu items
    <DoughnutMenuCard></DoughnutMenuCard>
  </div>
);

export default OrderMenu;
