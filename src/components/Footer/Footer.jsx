import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RiWhatsappFill } from "react-icons/ri";
import { FiArrowRight } from 'react-icons/fi';
import Logo from '../../assets/logo_orbz.png';


const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="contact-section container">
        <div className="contact-info">
          <h3>Entre em contato</h3>
          <p>Estamos prontos para ouvir  suas ideias e transformá-las em sites incríveis.</p>
          <div className="contact-social">
            <a href="https://web.whatsapp.com/>" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="contact-form">
          <h3>Peça um orçamento!</h3>
          <form>
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Escreva sua mensagem aqui..." required></textarea>
            <button type="submit">Envie a mensagem <FiArrowRight /></button>
          </form>
        </div>
      </div>

      
      <div className="footer-bottom">
        <div className="footer-bottom-container container">

          <div className="footer-about">
            <a href="#" className="footer-logo">
              <img src={Logo} alt="Orbz Logo" />
            </a>
            <p>
              Em busca de um site que realmente se<br/>destaque?  Solicite um orçamento hoje
              <br/>e dê opróximo passo para o sucesso<br/>online.
            </p>
          </div>

          <div className="container-nav">
          <nav className="footer-nav">
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#features">Nós</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>

          <div className="footer-social">
            <a href="https://web.whatsapp.com/" aria-label="WhatsApp"><RiWhatsappFill /></a>
            <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;