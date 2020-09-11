import React from 'react';
import Clock from './Tick'
import Klick from './Klick'
import Formular from './Formular'
import logo from './logo.svg'
import Button from './Button'

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
                <Button label="Accepteren" ></Button>
               
            </main>    
        </div>  )
     }    
export default Seite1