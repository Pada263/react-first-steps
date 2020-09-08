import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
function tick() {
  const element = (
    <div>
      <h1>Hallo Welt!</h1>
      <h2>Es ist {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(    element,    document.getElementById('root')  );}

setInterval(tick, 1000);
*/
