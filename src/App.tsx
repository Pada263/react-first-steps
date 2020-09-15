import React from 'react';
import './App.css';
import Seite1 from './Seite1'
import Seite2 from './Seite2'

import {Route, BrowserRouter, Switch} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route path='/Seite1'><Seite1/></Route>
          <Route path='/Seite2'><Seite2/></Route>
        </Switch>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

