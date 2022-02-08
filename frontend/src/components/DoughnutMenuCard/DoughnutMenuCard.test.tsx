import React from 'react';
import ReactDOM from 'react-dom';
import DoughnutMenuCard from './DoughnutMenuCard';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DoughnutMenuCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});