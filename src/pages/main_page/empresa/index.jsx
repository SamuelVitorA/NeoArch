import './index.scss';

import Botao from '../../../component/botão_main_emrpresa';
import { Link, useState, useNavigate } from "react-router-dom";

export default function Main_empresa() {

       return(
            <div className="emp">
                <Botao />
                <header>
                    <img src="./assets/images/image_1.webp" alt="imagem"/>

                    <div className="links">
                        <Link to="#">Home</Link>

                        <Link to="#middle-top">About</Link>

                        <Link to="#middle-botton">Contact</Link>
                    </div>
                    
                    <div className="schedule">
                        <a href="mailto:rafaelmiradeg@gmail.com">Start scheduling</a>
                    </div>
                </header>

                <main>
                    <div className="middle-top">
                        <div className='comb'>
                        <div className='mt1'>
                            <h1>Get a beautiful website</h1>

                            <h2>Tired of those boring and not rentable websites, try our services now and make the money you have ever wanted to make.</h2>
                        </div>
                        
                        <div className="callToaction">
                            <div className="schedule">
                                <a href="mailto:rafaelmiradeg@gmail.com">Make a schedule</a>
                            </div>
                            
                            <div className="schedule">
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                        </div>
                        <div className='celular'>
                            <img src="/assets/images/celular.png" alt="" />
                        </div>
                    </div>

                    <div className="middle-center">
                        <div>
                            <h1>About us</h1>

                            <h2>We are the  the Evolux Solution, a company that design your making you get the maximum buying rate you can have.</h2>
                        </div>

                        <div className="topics">
                            <h3>Be more efficient activing your goals</h3>
                            
                            <p>Not having a professional website could cause you to lose the idea of your brand or portfolio, not showing clearly what you have to offer.</p>
                        </div>

                        <div className="topics">
                            <h3>Stop losing client</h3>
                            
                            <p>With a confusing or bad structure website clients usually stop using you website and also get a wrong image you your brand.</p>
                        </div>
                    </div>

                    <div className="middle-botton">
                        
                        <div>
                            <h1>Make a schedule right now</h1>

                            <h2>For free you can make a schedule with our team for you see what do you need, and also make a reliable contract in minutes.</h2>
                        </div>
                        
                        <div className="callToaction">
                            <h4>For free</h4>

                            <div className="schedule">
                                <a href="rafaelmiradeg@gmail.com">Make a schedule</a>
                            </div>

                            <div className="schedule">
                                <Link> Learn more </Link>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        )
    }


