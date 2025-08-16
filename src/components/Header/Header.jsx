import React, { useState } from 'react';
import './Header.css';
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Logo from '../../assets/logo_orbz.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container container">
        <a href="#" className="header-logo">
          <img src={Logo} alt="Orbz Logo" />
        </a>

        <nav className={menuOpen ? 'header-nav active' : 'header-nav'}>
          <ul>
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a></li>
            <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfólio</a></li>
            <li><a href="#features" onClick={() => setMenuOpen(false)}>Nós</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
          <button className="nav-close-btn" onClick={() => setMenuOpen(false)}>
            <FiX />
          </button>
        </nav>

        <div className="header-social">
          <a href="https://web.whatsapp.com/" aria-label="WhatsApp"><RiWhatsappFill /></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;