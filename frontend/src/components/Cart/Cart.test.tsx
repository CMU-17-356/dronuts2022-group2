import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import { donuts } from '../../sample_data';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart donuts={donuts}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
