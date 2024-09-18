import './index.scss';

import { useState } from 'react';

export default function BarraLateral(props) {

    const [barral, setBarral] = useState(true);
    const [opcao, setOpcao] = useState(1);



    function hamburguer() {
        setBarral(!barral);
    }

    return (
        <div className='Comp-BarraLateral'>


            {barral === true &&
                <div className='linha' >
                    <img className='traços' src="./assets/images/Hamburguer.png" alt='oi' onClick={hamburguer} />
                    <div className='divisao'>

                        <div className='usuario'>
                            <img src={props.perfil ?? "./assets/images/do-utilizador.png"} alt="" />
                            <h1>{props.nome ?? 'Nome'}</h1>
                        </div>

                <Route path="/pedidos" element={<Pedidos/>}/>
                <Route path="/analitic" element={<Analitic/>}/>
                <Route path="/config" element={<Config/>}/>

                        {opcao === 1 &&
                            <div className='func ' >
                                <div className='borda'>
                                    <Link to={"/analitic"}><h2>Analyticys</h2></Link>
                                </div>
                                <Link to={"/calendair"}><h2>Calendar</h2></Link>
                                <Link to={"/config"}><h2>Settings</h2></Link>
                                <Link to={"/pedidos"}><h2>Orders</h2></Link>
                            </div>
                        }
                        
                        {opcao === 2 &&
                            <div className='func ' >
                                    <h2>Analyticys</h2>
                                <div className='borda'>
                                <h2>Calendar</h2>
                                </div>
                                <h2>Settings</h2>
                                <h2>Orders</h2>
                            </div>
                        }

                        {opcao === 3 &&
                            <div className='func ' >
                                    <h2>Analyticys</h2>
                                <h2>Calendar</h2>
                                <div className='borda'>
                                <h2>Settings</h2>
                                </div>
                                <h2>Orders</h2>
                            </div>
                        }

                        {opcao === 4 &&
                            <div className='func ' >
                                    <h2>Analyticys</h2>
                                <h2>Calendar</h2>
                                <h2>Settings</h2>
                                <div className='borda'>
                                <h2>Orders</h2>
                                </div>
                            </div>
                        }


                    </div>

                    <h2 className='sair'>Exit Account</h2>

                </div>
            }
            {barral === false &&
                <img className='traços' src="./assets/images/Hamburguer.png" alt='oi' onClick={hamburguer} />
            }
        </div>
    )
}