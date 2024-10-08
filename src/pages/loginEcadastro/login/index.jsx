import { useState, useNavigate } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("")
    const [psw, setPSW] = useState("")

    return(
        <div className="login">
            <div className="top">
                <Link ><img src="../../../../public/assets/images/Vector.png" alt="Voltar" /></Link>
                <h1>Log in</h1>
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
                </div>
                <div className="inputs">
                    <img src="../../../../public/assets/images/padlock.png" alt="User login" />
                    <input
                        type="text"
                        placeholder="Enter your password"
                        value={psw}
                        onChange={e => setPSW(e.target.value)}
                    />
                </div>
                <button>Login</button>
                <Link>Don't have a account yet?</Link>
            </div>
            <div className="botton">
                <Link to>forgot your password?</Link>
            </div>
        </div>
    )
}