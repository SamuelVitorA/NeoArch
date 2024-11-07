import './index.scss';

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Cadastro() {

        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");
        const navegacao = useNavigate();

        async function cadastrar() {
            try {
                const token = localStorage.getItem('USUARIO');

                const data = { email: email, senha: senha };
                
                const resposta = await axios.post(`http://localhost:1234/register?x-access-token=${token}`, data);
                if (!resposta.data.error) {
                    navegacao('/login');
                    console.log(resposta);
                }
                else {
                    alert("Email já cadastrado ou dados inválidos");
                }
            } catch (err) {
                console.error("Erro ao cadastrar:", err);
                alert("Erro ao cadastrar o usuário");
            }
        }
    
    return(
        <div className="register">
            <div className="login-box">
                <div className="top">
                    <Link to="/">
                        <img className="top-icon" src="./assets/images/voltar.png" alt="Voltar" />
                    </Link>
                    <h1>Register</h1>
                </div>
                <div className="middle">
                    <div className="inputs">
                        <img className="login-icons" src="./assets/images/usuario-login.png" alt="User login" />
                        <input
                            type="text"
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="inputs">
                        <img className="login-icons" src="./assets/images/cadeado.png" alt="cadeado" />
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>
                    <button className="button-login" onClick={cadastrar}>Register</button>
                </div>
            </div>    
        </div>
    )
    
}