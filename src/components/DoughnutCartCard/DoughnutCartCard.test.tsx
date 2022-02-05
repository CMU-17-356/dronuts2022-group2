import React from 'react';
import ReactDOM from 'react-dom';
import DoughnutCartCard from './DoughnutCartCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DoughnutCartCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});