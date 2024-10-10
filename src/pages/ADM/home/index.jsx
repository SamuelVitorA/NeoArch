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
              <Link to={"/Esqueceu_senha"}>Esqueceu_senha</Link> 
              <Link to={"/Mudar_senha"}>Mudar_senha</Link> 
              <Link to={"/Main_automo"}>Main_automo</Link> 
              <Link to={"/Main_empresa"}>Main_empresa</Link> 
        </div>        
    )
}