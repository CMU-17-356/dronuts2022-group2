import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import OrderMenu from './components/OrderMenu/OrderMenu';
import Checkout from './components/Checkout/Checkout';
import Backlog from './components/Backlog/Backlog';
import DronePage from './components/DronePage/DronePage';
import Login from './components/Login/Login';
/**
 * Main function to run the app
 * @return {React.FC}
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route element={<OrderMenu/>} path="/"/>
            <Route element={<Checkout/>} path="/checkout" />
            <Route element={<OrderMenu/>} path="menu"/>
            <Route element={<Backlog/>} path="backlog"/>
            <Route element={<DronePage/>} path="drones"/>
            <Route element={<Login/>} path="login"/>
          </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
