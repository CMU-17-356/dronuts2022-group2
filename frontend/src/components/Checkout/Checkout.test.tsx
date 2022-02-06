import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './Checkout';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checkout />, div);
  ReactDOM.unmountComponentAtNode(div);
});