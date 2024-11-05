import './index.scss'
import { useState } from 'react'

export default function Pedido_comp(prop){

    const [abrir, setAbrir] = useState(true)
    const [apagar, setApagar] = useState(true)

    function apagarl(){

        setApagar(!apagar)
    }
    

  

    return(
        <div>


            {apagar === true && 
    
    
            <div className="card">
            <div className="header">
              <h2>{prop.nome}</h2>
              <span className="numero">nº {prop.id}</span>
            </div>
            <div className="sla">
              <p className="preço">Budget: ${prop.preço}</p>
              <p>Start date: {prop.datai}</p>
              <p>Order deadline: {prop.dataf}</p>
            </div>
            <div className="linhaf">
              <button className="contato" onClick={abrir}>Contact ▼</button>
              <div className="icons">
                <img className='edit' src="./assets/images/lapis.png" alt="" />
                <img className='lixeira' src="./assets/images/vector (1).png" onClick={apagarl} alt=""  />
              </div>
            </div>
          </div>
            }

        </div>
    )
  }