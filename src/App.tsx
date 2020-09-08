import React from 'react';
import logo from './logo.svg';
import './App.css';
import Klick from './Klick'
/*
let name = "Patrick";
function Name() {
  const element = <h1>Hallo, {name}</h1>;
  return element;
}
*/


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <h1>Test Arena</h1>
        {Klick()}
    </div>
  );
 
}

export default App;

