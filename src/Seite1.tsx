import React from 'react';
import Clock from './Tick'
import Klick from './Klick'
import Formular from './Formular'
import logo from './logo.svg'
import Button from './Button'
import { PersonFill } from 'react-bootstrap-icons';
import {ChatDotsFill} from 'react-bootstrap-icons';
import {Phone} from 'react-bootstrap-icons';



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
                <Button label="Accepteren" disabled={false} icon={<PersonFill size={22} />} isYellow={false} action="submit"></Button>
                <Button label="Accepteren" disabled={false} icon={<ChatDotsFill size={22} />} isYellow={true} action="submit"></Button>
                <Button label="Accepteren" disabled={true} icon={<Phone size={22} />} isYellow={false} action="submit"></Button>
            </main>    
        </div>  )
     }    
export default Seite1




