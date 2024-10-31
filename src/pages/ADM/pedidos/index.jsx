import './index.scss';

import { useState } from 'react';
import SideBar from '../../../component/barra_lateral';

export default function Pedidos() {
    return(
        <div className='pedidos'>
            <SideBar
                opa="1"            
            />
            <div className='top'>
                <p>Filter by:</p>

                <div className='tb'>
                    <div className='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'>


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

                        <img src="./assets/images/vector 81.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}