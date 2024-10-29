import './index.scss';

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Mudar_senha() {

    const [psw, setPSW] = useState("")
    const [pswc, setPSWC] = useState("")

    let navigate = useNavigate()

    async function trocar(){

        
     if(psw == pswc){

            let data = {
                senha: psw
            }

            let resposta = await axios.put("http://localhost:1234/trocarSenha?id=1", data)
            navigate('/login')
        }
    }


       return(
        <div className='mud'>
                 <div className="login-box">
                <div className="top">
                   <Link to="/Main_automo"><img className="top-icon" src="./assets/images/voltar.png" alt="Voltar" /></Link>
                        <h1> reset account Password </h1>
                    </div>
                <div className="middle">
                    <p>enter a new password for </p>
                    <div className="inputs">
                    <img className="login-icons" src="./assets/images/cadeado.png" alt="cadeado" />
                        <input className="input"
                            type="password"
                            placeholder="Enter password"
                            value={psw}
                            onChange={e => setPSW(e.target.value)}
                        />
                    </div>
                    <div className="inputs">
                        <img className="login-icons" src="./assets/images/cadeado.png" alt="cadeado" />
                        <input className="input"
                            type="password"
                            placeholder="confirm password"
                            value={pswc}
                            onChange={e => setPSWC(e.target.value)}
                        />
                    </div>
                    <button className="button-login" onClick={trocar}>Trocar</button>
                    
                </div>

            </div>
        </div>
        )
    
    }

