import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">Dev Xplorer</div>
            <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    
                    <li><a href="https://github.com/Anagharanik?tab=repositories" onClick={() => setIsMenuOpen(false)}>Github</a></li>

                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;
