import React from 'react';
import ReactDOM from 'react-dom';
import OrderCard from './OrderCard';
import { order_1 } from "../../sample_data";

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrderCard  order={order_1}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});