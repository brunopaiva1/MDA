import React from 'react';
import './Footer.css';
import logoEmpresa from './assets/logo-mda.png'; 
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        <div className="footer-column">
          <img src={logoEmpresa} alt="Logo MDA" className="footer-logo" />

        </div>

        <div className="footer-column">
          <h3>Contato</h3>
          <div className="contact-info">
            <p className="contact-item">
              <MapPin size={16} />
              <span>Rua LTI, 6 - Pau dos Ferros, RN</span>
            </p>
            <p className="contact-item">
              <Phone size={16} />
              <a href="tel:+5511999999999">+55 (11) 99999-9999</a>
            </p>
            <p className="contact-item">
              <Mail size={16} />
              <a href="mailto:contato@mda.com">contato@mda.com</a>
            </p>
          </div>
        </div>

        <div className="footer-column">
          <h3>Siga-nos</h3>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook"><Facebook /></a>
            <a href="https://instagram.com" aria-label="Instagram"><Instagram /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MDA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;