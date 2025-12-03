import React from 'react';
import '../styles/Sections.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Automatización y Bots",
      description: "Optimización de flujos de trabajo mediante el desarrollo de bots inteligentes y scripts de automatización para reducir tareas repetitivas.",
      icon: "🤖", // Icono ajustado a Bots
      features: ["Bots en Python/JS", "Optimización de Procesos", "Integración de Servicios", "Eficiencia Operativa"],
    },
    {
      id: 2,
      title: "Desarrollo Backend & APIs",
      description: "Diseño y construcción de APIs RESTful robustas y seguras, enfocadas en el alto rendimiento y la escalabilidad de datos.",
      icon: "⚙️", // Icono ajustado a Backend
      features: ["FastAPI & Django", "PostgreSQL / MySQL", "Endpoints Eficientes", "RabbitMQ"],
    },
    {
      id: 3,
      title: "Soluciones Full Stack Cloud",
      description: "Integración completa de interfaces modernas en React con lógica de servidor potente y despliegue en infraestructura nube.",
      icon: "☁️", // Icono ajustado a Cloud/Fullstack
      features: ["React & Integraciones", "Microsoft Azure", "Docker & Contenedores", "SSO Microsoft"],
    },
    {
      id: 4,
      title: "Análisis y Documentación",
      description: "Levantamiento de requerimientos y documentación técnica detallada para asegurar la calidad y mantenibilidad del software.",
      icon: "📝", // Icono ajustado a Documentación
      features: ["Análisis Funcional", "Documentación Técnica", "Soporte & Mantenimiento", "Calidad de Código"],
    },
  ];

  return (
    <section className="section-container">
      <div className="section-header">
        <h2 className="section-title-wrapper">
          <span className="section-hash">#</span>
          Servicios
        </h2>
        <div className="section-line"></div>
        <p className="section-description">
          Ofrezco soluciones personalizadas adaptadas a tus necesidades, combinando experiencia técnica con enfoque en el usuario.
        </p>
      </div>

      <div className="card-grid">
        {services.map((service) => (
          <div key={service.id} className="neon-card">
            <div className="p-8">
              {/* USAMOS LAS NUEVAS CLASES AQUÍ */}
              <div className="card-icon">
                {service.icon}
              </div>
              <h3 className="card-title">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="card-hover-gradient" />
          </div>
        ))}
      </div>

      <div className="mt-16 p-12 rounded-xl bg-gradient-to-r from-secondary/10 to-transparent border border-secondary/30 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-white">¿Tienes un proyecto en mente?</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Estoy disponible para colaborar en proyectos desafiantes.
        </p>
        <a href="#" className="btn-primary">
          Contactarme
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;