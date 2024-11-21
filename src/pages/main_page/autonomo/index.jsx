import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';


export default function Main_automo(){
    const [message, setMessage] = useState({
        name: null,
        email: null,
        phone: null
    })

    const alterarEntrada = (e) => {
        const { name, value } = e.target;
        setMessage((dadosAnteriores) => ({ ...dadosAnteriores, [name]: value }));
    };

    return(
        <div className="Main">
            <div className="top">
                <header className="nav">
                    <div className="left">
                        <Link to={"/"}><img src="./assets/images/logowhite.png" alt="logo" /></Link>
                        <a href="">Our Services</a>
                        <a href="">Contact</a>
                        <Link to="/login">Login</Link>
                    </div>

                    <div className="right">
                        <div className="conference">
                            <a href="">Get a conference</a>
                            <hr />
                        </div>
                    </div>
                </header>
                <div className="middle">
                    <h1>Let us help you feel welcome getting inside home</h1>
                    <div className="conference">
                        <a href="">Get a conference</a>
                        <hr />
                    </div>
                </div>
            </div>
            
            <div className="center">
                <div>

                </div>
                <div className='services'>
                    <div className='project1'>
                        <h2>A cozy, modern and beautifull interior</h2>
                        <h2>2024 Samuel V. -</h2>
                    </div>
                    <div className='project2'>
                        <h2>An interior with luxury and glamour</h2>
                        <h2>- Rafael M. 2022</h2>
                    </div>
                </div>
                <div classname="contact">
                    <form action="">
                        <input type="text" placeholder='Name' value={message.name} onChange={() => setMessage(alterarEntrada)}/>
                    </form>
                </div>
            </div>
        </div>

    )

}