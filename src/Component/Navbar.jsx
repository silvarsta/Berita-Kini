import { useState, useEffect } from 'react';
import Logo from '../assets/img/berita-kini.svg';
import LogoNavbar from '../assets/img/berita-kini-white.svg';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // Aktifkan state saat scroll lebih dari 50px
            } else {
                setIsScrolled(false); // Nonaktifkan state
            }
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        return (
            <header id="header" className={`header ${isScrolled ? 'scrolled' : ''} mb-5`}>
                <div className="container">
                    <div className="header-content">
                    <a href="/" className="logo">
                        <img
                        src={isScrolled ? LogoNavbar : Logo}
                        alt="Logo"
                        className={`logo-img ${isScrolled ? 'small' : ''}`}
                        />
                    <h4 className={`website-name ${isScrolled ? 'small' : ''} mx-4 mt-3`}>
                        Berita Kini
                    </h4>
                    </a>
                    <nav className="navmenu">
                        <ul>
                        <li><a href="/" className="active">Beranda</a></li>
                        <li><a href="#terbaru">Terbaru</a></li>
                        <li><a href="#hiburan">Hiburan</a></li>
                        <li><a href="#gaya-hidup">Gaya Hidup</a></li>
                        <li><a href="#olahraga">Olahraga</a></li>
                        <li><a href="#nasional">Nasional</a></li>
                        <li><a href="#internasional">Internasional</a></li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </header>
    );
};

export default Navbar;