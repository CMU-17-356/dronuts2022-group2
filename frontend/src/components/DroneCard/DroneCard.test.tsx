import React from 'react';
import ReactDOM from 'react-dom';
import DroneCard from './DroneCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DroneCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});