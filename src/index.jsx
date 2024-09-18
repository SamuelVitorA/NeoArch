import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Rotas from './route.jsx';
import BarraLateral from './component/barra_lateral/index.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BarraLateral/>
  </React.StrictMode>
);
