import './index.scss';

import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Cadastro() {

        const [email, setEmail] = useState("")
        const [senha, setSenha] = useState("")
        const navegacao = useNavigate("")

        function cadastrar(){
            let data = {
                email: email,
                senha: senha
            }
            let resposta = axios.post("http://localhost:1234/registro", data)
            window.alert(resposta)
            navegacao.navigate("/")
        }
    
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
                        <input
                            type="text"
                            placeholder="Enter your password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                        <button onClick={() => cadastrar}>Cadastrar</button>
                    </div>
                </div>
            </div>
        )
    
    }

