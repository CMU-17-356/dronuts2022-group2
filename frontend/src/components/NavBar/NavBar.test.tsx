import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});