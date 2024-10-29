import './index.scss';

import { useState} from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Esqueceu_senha() {

    const [email, setEmail] = useState("");
    
    let navigate = useNavigate()

    async function confirmar(){
        let data = {
            email: email
        }
        let resposta = await axios.post("http://localhost:1234/confirmarEmail", data)
        if(resposta.data.email == email){
            navigate('/Mudar_senha')
         }
         else {
            alert('Email incorreto')
           }
           
    }
    
       return(
        <div className='esq'>
                   <div className="login-box">
                <div className="top">
                   <Link to="/login"><img className="top-icon" src="./assets/images/voltar.png" alt="Voltar" /></Link>
                        <h1>Password reset</h1>
                    </div>
                <div className="middle">
                    <div className="inputs">
                        <img className="login-icons" src="./assets/images/usuario-login.png" alt="User login" />
                        <input className="input"
                            type="text"
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                  
                    <button className="button-login" onClick={confirmar} >confirmar</button>
                    
                </div>
                <div className="forgot-password">
                    <Link to>We will send you a password reset email</Link>
                </div>

            </div>  
        </div>
        )
    }    
    

