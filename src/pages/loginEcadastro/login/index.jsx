import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.scss';
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [psw, setPSW] = useState("");

    let navigate = useNavigate();

    async function entrar() {
        try {
            const usuario = {
                email: email,
                senha: psw,
            };
        
            const url = `http://localhost:1234/login`;
            let resp = await axios.post(url, usuario);
            console.log(resp, "SDADSADS");
            
            if (resp.data.error) {
                alert(resp.data.error);
            } else {
                const token = resp.data.token;
                console.log(token);
                localStorage.setItem('USUARIO', token);
                navigate('/analitic');
            }
        } catch (error) {
            console.error("Erro ao tentar login:", error);
            alert("Erro ao tentar login.");
        }
    }

    return (
        <div className="login">
            <div className="login-box">
                <div className="top">
                    <Link to="/Main_automo">
                        <img className="top-icon" src="./assets/images/voltar.png" alt="Voltar" />
                    </Link>
                    <h1>Log in</h1>
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
                            value={psw}
                            onChange={e => setPSW(e.target.value)}
                        />
                    </div>
                    <button className="button-login" onClick={entrar}>Login</button>
                </div>
                <div className="forgot-password">
                    <Link to='/Esqueceu_senha'>forgot your password?</Link>
                </div>
            </div>    
        </div>
    );
}