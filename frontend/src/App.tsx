import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import OrderMenu from './components/OrderMenu/OrderMenu';
import Checkout from './components/Checkout/Checkout'

/**
 * Main function to run the app
 * @return {React.FC}
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <OrderMenu></OrderMenu>
        <Checkout></Checkout>
      </header>
    </div>
  );
}

export default App;
