import React from 'react';
import ReactDOM from 'react-dom';
import PaymentInfo from './PaymentInfo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaymentInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});