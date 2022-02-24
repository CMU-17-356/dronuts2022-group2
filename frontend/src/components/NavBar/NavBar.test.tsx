import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><NavBar></NavBar></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});