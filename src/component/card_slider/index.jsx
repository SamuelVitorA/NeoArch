import React, { useState } from 'react';
import './CardSlider.scss'; // Importe o arquivo SCSS

const CardSlider = () => {
    const [index, setIndex] = useState(0);
    const images = [
        'imagem1.jpg', // Substitua pelo caminho da sua imagem
        'imagem2.jpg',
        'imagem3.jpg',
    ];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="card-slider">
            <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
                {images.map((image, idx) => (
                    <div className="slide" key={idx}>
                        <img src={image} alt={`Imagem ${idx + 1}`} />
                    </div>
                ))}
            </div>
            <div className="controls">
                <button className="prev" onClick={prevSlide}>&lt;</button>
                <button className="next" onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    );
};

export default CardSlider;
