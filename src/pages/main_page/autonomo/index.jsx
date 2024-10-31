import './index.scss';
import { Link } from 'react-router-dom';


export default function Main_automo(){
       return(
            <div className="aut">
                <header>
                    <Link to="/"><img src="./assets/images/logowhite.png" alt="" className='logo'/></Link>
                    <div className='navigate-control'>
                        <h3>Our services</h3>
                        <h3>Contact</h3>
                        <Link to="/login"><h3>Login</h3></Link>
                    </div>
                    <div className="last-navigate" >
                        <h2>Get a conference</h2>

                    </div>
                </header>
                <section className="section1">
                    <img src='/assets/images/fundo_main.png' alt="F" />
                </section>
            </div>
        )
    
    }

