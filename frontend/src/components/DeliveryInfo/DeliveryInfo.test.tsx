import React from 'react';
import ReactDOM from 'react-dom';
import DeliveryInfo from './DeliveryInfo';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DeliveryInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});