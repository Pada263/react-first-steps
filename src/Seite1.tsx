import React from 'react';
import Clock from './Tick'
import Klick from './Klick'
import Formular from './Formular'
import logo from './logo.svg';

function Seite1() {
    return (
        <div>
           <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main className="App-main">
                <h1>Test Arena</h1>
                <Klick/>
                <Formular/>  
                <Clock/>
            </main>    
        </div>  )
     }    
export default Seite1