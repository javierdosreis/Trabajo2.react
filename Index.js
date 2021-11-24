import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import nav from './nav';
import './nav.css';
import footer from './footer';
import './footer.css';
import cuerpo from './cuerpo';
import './cuerpo.css';


ReactDOM.render(
  <React.StrictMode>
    <nav nombre="Atardecer" imagen="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"/>
  </React.StrictMode>,
  document.getElementById('root')
);
