import { Reducer, useReducer } from 'react';
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
import { UserCart, cartReducer, CartReducerAction} from './types/userCart';
/**
 * Main function to run the app
 * @return {React.FC}
 */
function App() {
  const [userCart, updateCart] = useReducer<Reducer<UserCart,CartReducerAction>>(cartReducer, {
    "donuts": [],
    "quantities": [],
  });
  console.log("Quantities: "+ userCart.quantities)
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route element={<OrderMenu  userCart={userCart} updateCart={ updateCart } />} path="/"/>
            <Route element={<Checkout userCart={userCart} updateCart={ updateCart }/>} path="/checkout" />
            <Route element={<OrderMenu  userCart={userCart} updateCart={ updateCart }/>} path="menu"/>
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
