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
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="last-navigate" >
                        <h2>Get a conference</h2>
                    </div>
                </header>
            </div>
        )
    
    }

