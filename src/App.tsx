import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Router } from 'express';
import OrderMenu from './components/OrderMenu/OrderMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <OrderMenu></OrderMenu>
      </header>
    </div>
  );
}

export default App;
