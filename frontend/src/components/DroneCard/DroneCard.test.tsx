import React from 'react';
import ReactDOM from 'react-dom';
import DroneCard from './DroneCard';
import { dronesData } from '../../sample_data';

it('should mount', () => {
  const div = document.createElement('div');
  expect(dronesData).not.toHaveLength(0);
  ReactDOM.render(<DroneCard drone={dronesData[0]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
