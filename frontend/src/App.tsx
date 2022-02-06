import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import OrderMenu from './components/OrderMenu/OrderMenu';

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
      </header>
    </div>
  );
}

export default App;
