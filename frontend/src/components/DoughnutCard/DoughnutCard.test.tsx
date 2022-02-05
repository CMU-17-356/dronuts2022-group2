import React from 'react';
import ReactDOM from 'react-dom';
import DoughnutCard from './DoughnutCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DoughnutCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});