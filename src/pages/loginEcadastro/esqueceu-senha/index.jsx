import './index.scss';
import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function EsqueceuSenha() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function confirmar() {
        const data = { email };
        try {
            const resposta = await axios.post("http://localhost:5022/confirmarEmail", data);
            if (resposta.data.email === email) {
                navigate('/Mudar_senha');
            } else {
                alert('Email incorreto');
            }
        } catch (error) {
            console.error("Erro ao confirmar email:", error);
        }
    }

    return (
        <div className='register'>
            <div className="register-box">
                <div className="top">
                    <Link to="/login">
                        <img className="top-icon" src="./assets/images/voltar.png" alt="Voltar" />
                    </Link>
                    <h1>Password Reset</h1>
                </div>
                <div className="middle">
                    <div className="inputs">
                        <img className="login-icons" src="./assets/images/usuario-login.png" alt="User login" />
                        <input
                            type="text"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="button-login" onClick={confirmar}>Confirmar</button>
                </div>
                <div className="forgot-password">
                    <Link to="#">We will send you a password reset email</Link>
                </div>
            </div>
        </div>
    );
}

