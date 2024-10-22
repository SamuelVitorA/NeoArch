import './index.scss';

import { useState } from 'react';
import SideBar from '../../../component/barra_lateral';

export default function Pedidos() {
    return(
        <div className='pedidos'>
            <SideBar
                opa="1"            
            />
        </div>
    )
}