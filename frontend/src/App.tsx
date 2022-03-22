import React from 'react';
import { Reducer, useReducer, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import OrderMenu from './components/OrderMenu/OrderMenu';
import Checkout from './components/Checkout/Checkout';
import Backlog from './components/Backlog/Backlog';
import DronePage from './components/DronePage/DronePage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { UserCart, cartReducer, CartReducerAction } from './types/userCart';
import { OrderReducerAction, orderReducer } from './types/orders';
import { DroneReducerAction, droneReducer } from './types/drone';
import { loginType } from './types/loginType';
import { donuts } from './sample_data';
import Home from './components/Home/Home';
import { Order } from '../database/schemas/order_schema';
import { Drone } from '../database/schemas/drone_schema';
import { drone1, drone2 } from './sample_data';

/**
 * Main function to run the app
 * @return {React.FC}
 */
function App() {
  const [userCart, updateCart] = useReducer<Reducer<UserCart, CartReducerAction>>(cartReducer, {
    'donut_orders': [],
  });
  const [orders, updateOrders] = useReducer<Reducer<Order[], OrderReducerAction>>(orderReducer, []);
  const [drones, updateDrones] = useReducer<Reducer<Drone[], DroneReducerAction>>(droneReducer, [drone1, drone2]);

  const [userType, updateUserType] = useState<loginType>('none');
  let userTypeRoutes = <></>;
  if (userType === 'customer') {
    userTypeRoutes = (<>
      <Route element={<Checkout userCart={userCart} updateCart={updateCart} updateOrders={updateOrders}/>} path="checkout/*" />
      <Route element={<OrderMenu userCart={userCart} updateCart={updateCart} donuts={donuts}/>} path="menu/*" />
    </>
    );
  } else if (userType === 'employee') {
    userTypeRoutes = (<>
      <Route element={<Backlog orders={orders} updateOrders={updateOrders} updateDrones={updateDrones}/>} path="backlog/*" />
      <Route element={<DronePage drones={drones}/>} path="drones/*" />
    </>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar userType={userType}/>
          <Routes>
            {userTypeRoutes}
            <Route element={<Login updateUserType={updateUserType} />} path="login/*" />
            <Route element={<Signup updateUserType={updateUserType} />} path="signup/*" />
            <Route element={<Home />} path="*" />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
