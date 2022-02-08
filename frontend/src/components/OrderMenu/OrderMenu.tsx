import React, { FC } from 'react';
import DoughnutMenuCard from '../DoughnutMenuCard/DoughnutMenuCard';
import './OrderMenu.css';

interface OrderMenuProps {}

const OrderMenu: FC<OrderMenuProps> = () => (
    <div className="OrderMenu">
        <div className="container">
            <DoughnutMenuCard></DoughnutMenuCard>
            <DoughnutMenuCard></DoughnutMenuCard>
            <DoughnutMenuCard></DoughnutMenuCard>
            <DoughnutMenuCard></DoughnutMenuCard>
        </div>
    </div>
);

export default OrderMenu;
