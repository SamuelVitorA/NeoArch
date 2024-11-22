import { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Main_automo() {
    const [isSticky, setSticky] = useState(false);
    const [message, setMessage] = useState({
        name: '',
        email: '',
        phone: '',
        text: '',
    });

    const alterarEntrada = (e) => {
        const { name, value } = e.target;
        setMessage((dadosAnteriores) => ({ ...dadosAnteriores, [name]: value }));
    };

    const gerarLinkWhatsApp = () => {
        const baseUrl = "https://wa.me/5511917380299";
        const text = `Olá, meu nome é ${message.name}. Meu e-mail é ${message.email}. Gostaria de falar sobre: ${message.text}`;
        const url = `${baseUrl}?text=${encodeURIComponent(text)}`;
        return url;
    };

    useEffect(() => {
        let lastScrollY = 0;
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > 50 && lastScrollY <= 50) {
                setSticky(true);
            } else if (currentScroll <= 50 && lastScrollY > 50) {
                setSticky(false);
            }
            lastScrollY = currentScroll;
        };

        const debounce = (func, delay) => {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => func(...args), delay);
            };
        };

        const optimizedHandleScroll = debounce(handleScroll, 100);
        window.addEventListener('scroll', optimizedHandleScroll);

        return () => {
            window.removeEventListener('scroll', optimizedHandleScroll);
        };
    }, []);

    return (
        <div className="Main">
            <div className="top">
                <header className={`nav ${isSticky ? 'sticky' : ''}`}>
                    <div className="left">
                        <Link to={"/"}><img src="./assets/images/logowhite.png" alt="logo" /></Link>
                        <a href="">Our Services</a>
                        <a href="">Contact</a>
                        <Link to="/login">Login</Link>
                    </div>

                    <div className="right">
                        <div className="conference">
                            <a href="https://wa.me/5511917380299?text=Olá,%20eu%20gostaria%20de%20fazer%20um%20agendamento%20para%20um%20design%20de%20interior">Get a conference</a>
                            <hr />
                        </div>
                    </div>
                </header>
                <div className="middle">
                    <h1>Let us help you feel welcome getting inside home</h1>
                    <div className="conference">
                        <a href="https://wa.me/5511917380299?text=Olá,%20eu%20gostaria%20de%20fazer%20um%20agendamento%20para%20um%20design%20de%20interior">Get a conference</a>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="center">
                <div className='cta'>
                    <div className='left'>
                        <h1>Have a inside that get everyone impressive</h1>
                        <div className="conference">
                            <a href="https://wa.me/5511917380299?text=Olá,%20eu%20gostaria%20de%20fazer%20um%20agendamento%20para%20um%20design%20de%20interior">Get a conference</a>
                            <hr />
                        </div>
                    </div>

                    <div className="right">
                        <h2>What will you get</h2>
                        <ul>
                            <li>A good looking interior</li>
                            <li>More compliments about your house</li>
                            <li>A relief when arriving home</li>
                        </ul>
                    </div>
                </div>

                <div className="services">
                    <div className="project1">
                        <h2>A cozy, modern and beautifull interior</h2>
                        <h2>2024 Samuel V. -</h2>
                    </div>
                    <div className="project2">
                        <h2>An interior with luxury and glamour</h2>
                        <h2>- Rafael M. 2022</h2>
                    </div>
                </div>

                <div className="contact">
                    <h2>Contact Us</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={message.name}
                            onChange={alterarEntrada}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={message.email}
                            onChange={alterarEntrada}
                            required
                        />
                        <textarea
                            name="text"
                            placeholder="Your message"
                            value={message.text}
                            onChange={alterarEntrada}
                            required
                        />
                        <button>
                            <a href={gerarLinkWhatsApp()}>Enviar mensagem</a>
                        </button>
                    </form>
                </div>

                <footer className="footer">
                    <p>&copy; 2024 NeoArch. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
