import { useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import './index.scss';

export default function Login() {
    const [email, setEmail] = useState("")
    const [psw, setPSW] = useState("")

    return(
        <div className="login">
            <div className="login-box">
                <div className="top">
                    <Link ><img src="../../../../public/assets/images/Vector.png" alt="Voltar" /></Link>
                    <h1>Log in</h1>
                </div>
                <div className="middle">
                    <div className="inputs">
                        <img src="public\assets\images\usuario-login.png" alt="User login" />
                        <input className="input"
                            type="text"
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="inputs">
                        <img src="../../../../public/assets/images/padlock.png" alt="cadeado" />
                        <input className="input"
                            type="password"
                            placeholder="Enter password"
                            value={psw}
                            onChange={e => setPSW(e.target.value)}
                        />
                    </div>
                    <button className="button-login">Login</button>
                    <div className="dont-have-account">
                    <Link>Don't have a account yet?</Link>
                    </div>
                </div>
                <div className="forgot-password">
                    <Link to>forgot your password?</Link>
                </div>

            </div>    
        </div>
    )
}