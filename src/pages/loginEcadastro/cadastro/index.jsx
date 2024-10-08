import './index.scss';

import { useState, useNavigate } from "react";


export default function Cadastro() {

        const [email, setEmail] = useState("")
        const [senha, setSenha] = useState("")


       return(
            <div className="login">
                <div className="top">
    
                </div>
    
                <div className="middle">
                    <div className="inputs">
                        <img src="../../../../public/assets/images/icone.png" alt="User login" />
                        
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        )
    
    }

