import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import './index.scss'
import SideBar from '../../../component/barra_lateral';
  
export default function App() {
  return (
    <div className='analitico'>
        <SideBar
            opa="0"
        />

  
    </div>
  );
}