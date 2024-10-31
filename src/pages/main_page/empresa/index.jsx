import './index.scss';

import { Link } from "react-router-dom";

export default function Main_empresa() {

       return(
            <div className="emp">
                <header>
                    <Link to="/"><img src="./assets/images/image_1.webp" alt="imagem"/></Link>

                    <div className="links">
                        <Link to="#">Home</Link>

                        <a href="#about">About</a>

                        <a href="#middle-botton">Contact</a>
                    </div>
                    
                    <div className="schedule">
                        <a href="mailto:rafaelmiradeg@gmail.com">Start scheduling</a>
                    </div>
                </header>

                <main>
                    <div className="middle">
                        <div className='left'>
                            <div>
                                <h1>Get a beautiful website</h1>

                                <h2>Tired of those boring and not rentable websites, try our services now and make the money you have ever wanted to make.</h2>
                            </div>
                        
                            <div className="callToaction">
                                <div className="schedule">
                                    <a href="mailto:rafaelmiradeg@gmail.com">Make a schedule</a>
                                </div>
                                
                                <div className={"schedule branco"}>
                                    <a href="#">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className='right rotate'>
                            <img src="./assets/images/gifis.gif" alt="yes" />    
                        </div>  
                    </div>

                    <div id="about" className="middle">
                         <div className='left'>
                            <div>
                                <h1>About us</h1>
                                <h2>We are the  the Evolux Solution, a company that design your making you get the maximum buying rate you can have.</h2>
                            </div>
                            <div className='callToaction'>
                                <div className="topics">
                                    <h3>Be more efficient activing your goals</h3>
                                    <p>Not having a professional website could cause you to lose the idea of your brand or portfolio, not showing clearly what you have to offer.</p>
                                </div>

                                <div className="topics">
                                    <h3>Stop losing client</h3>
                                    <p>With a confusing or bad structure website clients usually stop using you website and also get a wrong image you your brand.</p>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <img src="./assets/images/the_truth.png" alt="Das"/>
                        </div>

                    </div>
                    <div id="middle-botton" className="middle-botton">
                        <div className='content'>
                            <h1>Make a schedule right now</h1>

                            <h2>For free you can make a schedule with our team for you see what do you need, and also make a reliable contract in minutes.</h2>
                        </div>
                        
                        <div className='idk'>
                            <h4>For free</h4>
                            <div className="callToaction">
                                <div className="schedule preto">
                                    <a href="rafaelmiradeg@gmail.com">Make a schedule</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <hr />
                    </footer>
                </main>
            </div>
        )
    }


