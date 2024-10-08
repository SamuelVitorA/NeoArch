import './index.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return(
        <div className='home'>
              <Link to={"/analitic"}>analitic</Link>  
              <Link to={"/pedidos"}>pedidos</Link> 
              <Link to={"/config"}>config</Link> 
              <Link to={"/cadastro"}>Cadastro</Link> 
              <Link to={"/login"}>Login</Link> 
        </div>        
    )
}