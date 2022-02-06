import React from 'react';
import ReactDOM from 'react-dom';
import OrderMenu from './OrderMenu';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrderMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});