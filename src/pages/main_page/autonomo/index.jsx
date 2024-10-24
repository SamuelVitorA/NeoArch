import './index.scss';
import { register } from 'swiper/element';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useState, useNavigate } from "react";
import videojs from 'video.js';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper/modules';

register();



export default function Main_automo(){
    const data = [
        {id:'1', video:"./assets/videos/video1carrossel.mp4"},
    ]
       return(
            <div className="aut">
                <div className='header'>
                    <img src="./assets/images/logowhite.png" alt="" className='logo'/>
                    <div className='navigate-control'>
                        <h3>Home</h3>
                        <h3>Projects</h3>
                        <h3>About</h3>
                        <h3>Contact</h3>
                    </div>
                    <div className="last-navigate" >
                        <h2>Get a conference</h2>
                    </div>
                </div>
                <div className='section1'>
                    <Swiper
                    slidesPerView={1}
                    pagination={{clickable:true}}
                    navigation
                    >
                        {data.map( (item)=>(
                        <SwiperSlide key={item.id}>
                            <video autoPlay loop 
                            src={item.video}
                            alt="Slider"
                            className='slider-item'
                             />
                        </SwiperSlide>
                        )
                    )}
                    </Swiper>
                </div>
                <div className="section2">
                <Swiper
                    slidesPerView={1}
                    pagination={{clickable:true}}
                    navigation
                    >
                        {data.map( (item)=>(
                        <SwiperSlide key={item.id}>
                            <video autoPlay={false} preload="auto" loop 
                            src={item.video}
                            alt="Slider"
                            className='slider-item'
                             />
                        </SwiperSlide>
                        )
                    )}
                    </Swiper>
                    

                </div>

            </div>
        )
    
    }

