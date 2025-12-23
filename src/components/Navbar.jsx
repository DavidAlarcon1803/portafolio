import React, { useState } from 'react';
import { Linkedin, Mail, MessageCircle, Check } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
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
          <EmailCopyLink
            email="efrendavidalarconmunoz@gmail.com"
          />
        </div>
      </div>
    </nav>
  );
};

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

const EmailCopyLink = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);

    setCopied(true);

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
      <div className={`icon-box ${copied ? 'border-green-500 bg-green-500/10' : ''}`}>
        {copied ? <Check size={20} className="text-secondary" /> : <Mail size={20} />}
      </div>

      <span className={`link-text ${copied ? 'text-secondary' : ''}`}>
        {copied ? "¡Copiado!" : "Correo"}
      </span>

      <div className={`copy-popup ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        Correo copiado al portapapeles
      </div>
    </button>
  );
};

export default Navbar;