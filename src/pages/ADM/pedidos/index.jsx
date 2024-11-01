import './index.scss';

import { useState } from 'react';
import SideBar from '../../../component/barra_lateral';

export default function Pedidos() {
    const [add, setAdd] = useState(false)

    function addpedido(){
        setAdd(!add)
    }

    return(
        <div className='pedidos'>
            <SideBar
                opa="1"            
            />
            <div className='top'>

                <div className='add'>


                <div className='tb'>
                <p>Filter by:</p>
                    <div className='grupo'>


                    <div className='filtros'>
                        <p>price</p>
                        <img src="./assets/images/vector 75.png" alt="" />
                    </div>

                    <div className='filtros'>
                        <p>Deadline</p>
                        <img src="./assets/images/vector 75.png" alt="" />
                    </div>

                    <div className='filtros'>
                        <p>Name</p>
                        <img src="./assets/images/vector 75.png" alt="" />
                    </div>

                    <div className='filtros'>
                        <p>nº</p>
                        <img src="./assets/images/vector 75.png" alt="" />
                    </div>
                    </div>  

                    <div className='input'>
                        <img src="./assets/images/magnifying-glass 1.png" alt="" />
                        <input type="text"  placeholder='Search something'/>
                    </div>

                </div>
                        <img src="./assets/images/botao-adicionar.png" alt="" onClick={addpedido} />


   
                    
                </div>

                
                    {add === true &&
                    
                        <div className='cardP'>

                            <h1>Name</h1>
                            <input className='a' type="text" placeholder='Name' />
                        
                            <h1>Budget</h1>
                            <input className='a'  type="number" placeholder='Value in reais' />
                        
                            <h1>Start date</h1>
                            <input className='a' type="date" />
                        
                            <h1>End date</h1>
                            <input className='a'  type="date" />
                        
                            <h1>Telephone</h1>
                            <input className='a'  type="number" placeholder='customer telefone'/>
                        
                            <h1>Email</h1>
                            <input className='a' type="text" placeholder='customer email'/>
                        
                            <h1>Optional telephone</h1>
                            <input className='a'  type="number" placeholder='customer telefone'/>
                        
                            <h1>Optional email</h1>
                            <input className='a'  type="text" placeholder='customer email'/> 

                            <div className='botao'>
                                <h3>Save</h3>
                                <h3 className='cancel'>Cancel</h3>
                            </div>


                        </div>
                    }
            </div>
            
        </div>
    )
}