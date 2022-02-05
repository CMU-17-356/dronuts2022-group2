import React from 'react';
import ReactDOM from 'react-dom';
import DeliveryInfo from './DeliveryInfo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeliveryInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});