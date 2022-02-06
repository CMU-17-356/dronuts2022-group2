import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart />, div);
  ReactDOM.unmountComponentAtNode(div);
});