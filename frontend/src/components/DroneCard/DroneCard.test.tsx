import React from 'react';
import ReactDOM from 'react-dom';
import DroneCard from './DroneCard';
import { drones } from '../../sample_data';

it('should mount', () => {
  const div = document.createElement('div');
  expect(drones).not.toHaveLength(0);
  ReactDOM.render(<DroneCard drone={drones[0]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
