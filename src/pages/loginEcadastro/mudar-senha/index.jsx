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

            let resposta = await axios.put("http://localhost:5022/trocarSenha?id=1", data)
            navigate('/login')
        }
    }


       return(
        <div className='tudo-individualmente'>
                 <div className="login-box">
                <div className="top">
                   <Link to="/Main_automo"><img className="top-icon" src="./assets/images/voltar.png" alt="Voltar" /></Link>
                        <h1>Type your new password</h1>
                    </div>
                <div className="middle">
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
                            placeholder="Confirm password"
                            value={pswc}
                            onChange={e => setPSWC(e.target.value)}
                        />
                    </div>
                    <button className="button-login" onClick={trocar}>Change Password</button>
                    
                </div>

            </div>
        </div>
        )
    
    }
