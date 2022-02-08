import React, { FC } from 'react';
import Cart from '../Cart/Cart';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import PaymentInfo from '../PaymentInfo/PaymentInfo';
import './Checkout.css';

interface CheckoutProps {}

const Checkout: FC<CheckoutProps> = () => (
    <div className="Checkout">
        <div className='flex-container'>
            <Cart></Cart>
            <div className = 'sidebar'>
                <div className = 'infoForm'>
                    <DeliveryInfo></DeliveryInfo>
                </div>
                <div className = 'infoForm'>
                    <PaymentInfo></PaymentInfo>
                </div>
            </div>
        </div>
    </div>
);

export default Checkout;
