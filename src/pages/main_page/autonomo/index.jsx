import './index.scss';

import { useState, useNavigate } from "react";
import videojs from 'video.js';

export default function Main_automo() {
    const [video] = useState('./assets/videos/video1carrossel');
    const [imagem] = useState('./assets/images/logowhite.png')
       return(
            <div className="aut">
                <div className='header'>
                    <img className='logo' src={imagem} alt="" />
                    <div className='navigate-control'>
                        <h3>Home</h3>
                        <h3>Projects</h3>
                        <h3>About</h3>
                        <h3>Contact</h3>
                    </div>
                </div>
                <div className='section1'>
                

                
                </div>

            </div>
        )
    
    }

