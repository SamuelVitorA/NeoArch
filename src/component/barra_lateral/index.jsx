import './index.scss';

import { useState } from 'react';

export default function BarraLateral(props) {

    const [barral, setBarral] = useState(true);

    function hamburguer(){
        setBarral(!barral);
    }

    return (
        <div className='Comp-BarraLateral'>
            <img className='traços' src="./assets/images/Hamburguer.png" onClick={hamburguer}/>

            {barral == true && 
            <div> 
            <div className='divisao'>

                <div className='usuario'>
                    <img src="./assets/images/do-utilizador.png" alt="" />
                    <h1>Nome</h1>
                </div>

                <div className='func'>
                    <h2>Analytics</h2>
                    <h2>Calendar</h2>
                    <h2>Settings</h2>
                    <h2>Orders</h2>
                </div>

            </div>
            <h2 className='sair'>Exit Account</h2>
            </div>
            }
        </div>
    )
}