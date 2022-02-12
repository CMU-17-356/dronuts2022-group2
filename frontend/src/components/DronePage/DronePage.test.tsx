import React from 'react';
import ReactDOM from 'react-dom';
import DronePage from './DronePage';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DronePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});