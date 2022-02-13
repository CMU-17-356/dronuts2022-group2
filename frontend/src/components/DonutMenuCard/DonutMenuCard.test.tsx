import React from 'react';
import ReactDOM from 'react-dom';
import DonutMenuCard from './DonutMenuCard';
import { donuts } from '../../sample_data';

it('should mount', () => {
  const div = document.createElement('div');
  expect(donuts).not.toHaveLength(0);
  ReactDOM.render(<DonutMenuCard donut={donuts[0]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
