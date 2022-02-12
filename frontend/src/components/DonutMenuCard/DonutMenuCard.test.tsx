import React from 'react';
import ReactDOM from 'react-dom';
import DonutMenuCard from './DonutMenuCard';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DonutMenuCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});