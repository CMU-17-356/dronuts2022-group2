import React from 'react';
import ReactDOM from 'react-dom';
import DonutCartCard from './DonutCartCard';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DonutCartCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});