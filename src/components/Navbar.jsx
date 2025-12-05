import React, { useState } from 'react';
import { Linkedin, Mail, MessageCircle, Check, Copy } from 'lucide-react';
import '../styles/Navbar.css'; 

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
          <SocialLink 
            href="https://wa.me/573022977847" 
            icon={<MessageCircle size={20} />} 
            label="WhatsApp" 
          />
          <SocialLink 
            href="https://www.linkedin.com/in/efren-david-alarcón-muñoz-948377242" 
            icon={<Linkedin size={20} />} 
            label="LinkedIn" 
          />
          
          {/* Componente especial para el Correo */}
          <EmailCopyLink 
            email="efrendavidalarconmunoz@gmail.com" 
          />
        </div>
      </div>
    </nav>
  );
};

// --- COMPONENTES AUXILIARES ---

// 1. Enlace Normal (WhatsApp, LinkedIn)
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

// 2. Enlace con función de Copiar (Correo)
const EmailCopyLink = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // 1. Copiar al portapapeles
    navigator.clipboard.writeText(email);
    
    // 2. Activar estado visual
    setCopied(true);

    // 3. Quitar el aviso después de 2 segundos
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button 
      onClick={handleCopy} 
      className="social-link relative group border-none bg-transparent cursor-pointer p-0 font-inherit"
      type="button"
    >
      {/* Icono: Cambia de Carta a Check si se copió */}
      <div className={`icon-box ${copied ? 'border-green-500 bg-green-500/10' : ''}`}>
        {copied ? <Check size={20} className="text-secondary" /> : <Mail size={20} />}
      </div>
      
      {/* Texto del botón */}
      <span className={`link-text ${copied ? 'text-secondary' : ''}`}>
        {copied ? "¡Copiado!" : "Correo"}
      </span>

      {/* --- POPUP / TOOLTIP --- */}
      {/* Aparece solo cuando 'copied' es true */}
      <div className={`copy-popup ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        Correo copiado al portapapeles
      </div>
    </button>
  );
};

export default Navbar;