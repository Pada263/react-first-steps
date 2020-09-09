import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Tick'
import Klick from './Klick'
import Formular from './Formular'

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
      <main className="App-main">
        <h1>Test Arena</h1>
        <Klick/>
        <Formular/>  
        <Clock/>
      </main>
    </div>
  );
 
}

export default App;

