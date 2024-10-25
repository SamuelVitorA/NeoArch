import './index.scss';


import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Cadastro() {

        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");
        const navegacao = useNavigate();

        function cadastrar(){
            let data = {
                email: email,
                senha: senha
            }
            let resposta = axios.post("http://localhost:1234/registro", data)
            window.alert(resposta.data)
            navegacao('/')
        }
    
    return(
        <div className="cadastro">
            <div className="top">

            </div>

            <div className="middle">
                <div className="inputs">
                    <img className="login-icons" src="/assets/images/usuario-login.png" alt="User login" />
                    
                    <input className="input" type="email" placeholder="Enter your Email" value={email} onChange={e => setEmail(e.target.value)} />

                </div>

                <div className="inputs">
                    <img className="login-icons" src="/assets/images/cadeado.png" alt="Cadeado" />

                    <input  className="input" type="password" placeholder="Enter your Password" value={senha} onChange={e => setSenha(e.target.value)} />
                </div>
                
                <button onClick={cadastrar}>Cadastrar</button>
        
            </div>
        </div>
    )
    
}

