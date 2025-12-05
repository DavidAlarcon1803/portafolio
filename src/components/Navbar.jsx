import React from 'react';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import '../styles/Navbar.css'; // <--- Importante: Importamos los estilos

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        
        {/* LOGO / NOMBRE */}
        <div className="brand-group">
          <h1 className="brand-title">
            David 
            <span className="brand-highlight">
              Alarcon
            </span>
          </h1>
          <span className="brand-subtitle">
            Full Stack Developer
          </span>
        </div>

        {/* ENLACES SOCIALES */}
        <div className="social-nav">
          {/* WhatsApp ya estaba bien, tiene https:// */}
          <SocialLink 
            href="https://wa.me/573022977847" 
            icon={<MessageCircle size={20} />} 
            label="WhatsApp" 
          />
          
          {/* CORREGIDO: Agregado https:// al inicio */}
          <SocialLink 
            href="https://www.linkedin.com/in/efren-david-alarcón-muñoz-948377242" 
            icon={<Linkedin size={20} />} 
            label="LinkedIn" 
          />
          
          {/* CORREGIDO: Agregado mailto: al inicio */}
          <SocialLink 
            href="mailto:efrendavidalarconmunoz@gmail.com" 
            icon={<Mail size={20} />} 
            label="Correo" 
          />
        </div>
      </div>
    </nav>
  );
};

// Componente reutilizable limpio
const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <div className="icon-box">
        {icon}
      </div>
      <span className="link-text">
        {label}
      </span>
    </a>
  );
};

export default Navbar;