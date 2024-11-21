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
                <div className='content-section1'>

                    <h1 className='h1-box'>Let us help you feel welcome getting inside home</h1>
                    <h3 className='h3-box'>Get a conference</h3>
                </div>
                
            </section>            

            <section className='section2'>
                <div className='content-section2'>
                    <div className='pt1content'>
                        <h1 className="text">Have a inside that get everyone impressive </h1>
                        <Link className='navigatept1'><h2 >Get a conference</h2></Link>
                    </div>
                    <div className='pt2content'>
                        <h1>What will you get</h1>
                        <ul>
                            <li>A good looking interior</li>
                            <li>More compliments about your house</li>
                            <li>A relief when arriving home</li>
                        </ul>
                    </div>
            
                </div>
                
            </section>
        </div>

    )

}