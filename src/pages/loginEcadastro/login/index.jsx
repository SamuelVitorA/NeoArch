import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.scss';
import axios from "axios";


export default function Login() {
    const [email, setEmail] = useState("")
    const [psw, setPSW] = useState("")

    let navigate = useNavigate()
 
    async function logar(){
        let data = {
            email: email,
            senha: psw
        }

        let resposta = await axios.post("http://localhost:1234/logar", data)

        
       if(resposta.data.senha == psw  && resposta.data.email == email ){
          navigate('/analitic')
       }
       else {
        alert('Email ou senha incorreta')
       }
       
    }

    return(
        <div className="login">
            <div className="login-box">
                <div className="top">
                   <Link to="/Main_automo"><img className="top-icon" src="./assets/images/voltar.png" alt="Voltar" /></Link>
                        <h1>Log in</h1>
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
                    <div className="inputs">
                        <img className="login-icons" src="./assets/images/cadeado.png" alt="cadeado" />
                        <input className="input"
                            type="password"
                            placeholder="Enter password"
                            value={psw}
                            onChange={e => setPSW(e.target.value)}
                        />
                    </div>
                    <button className="button-login" onClick={logar}>Login</button>
                    <div className="dont-have-account">
                    <Link Link to="/cadastro">Don't have a account yet?</Link>
                    </div>
                </div>
                <div className="forgot-password">
                    <Link to>forgot your password?</Link>
                </div>

            </div>    
        </div>
    )
}