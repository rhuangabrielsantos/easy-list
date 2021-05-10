import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import { registerServiceWorker } from './serviceWorker'

registerServiceWorker();

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
