import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Seite2 from './Seite2'
import {HashRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route exact={true} path="/" component={App} />
      <Route path="/Seite2" component={Seite2} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

