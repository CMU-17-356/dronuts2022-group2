import React from 'react';
import ReactDOM from 'react-dom';
import DonutCartCard from './DonutCartCard';
import { donuts } from '../../sample_data';

it('should mount', () => {
  const div = document.createElement('div');
  expect(donuts).not.toHaveLength(0);
  ReactDOM.render(<DonutCartCard donut={donuts[0]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
