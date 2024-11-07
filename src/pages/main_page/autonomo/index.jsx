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
                <div className="video-background">
                    <video autoPlay loop muted className="video">
                        <source src="./assets/videos/videoooo.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='content'>
                    <div className='h1-box'>
                    <h1>Let us help you feel welcome getting inside home</h1>
                    </div>
                

                </div>
                
            </section>            

            <section className='section2'>
                
            </section>
        </div>

    )

}