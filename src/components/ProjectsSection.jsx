import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sections.css";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Gestor De Eventos",
      description: "Es un pequeño proyecto en desarrollo donde quiero demostrar la experiencia con las tecnologías que he trabajado. el proyecto tiene una gestión de usuarios y va a funcionar cómo una plataforma para comprar entradas a eventos.
se usaron varias plataformas que brindan alternativas gratuitas para poder generar el despliegue",
      technologies: ["React", "Python", "Seguridad"],
      hasButton: true, 
    },
  ];

  return (
    <section className="section-container">
      <div className="section-header">
        <h2 className="section-title-wrapper">
          <span className="section-hash">#</span>
          Proyectos Destacados
        </h2>
        <div className="section-line"></div>
      </div>
      <div className="card-grid">
        {projects.map((project) => (
          <div key={project.id} className="neon-card">
            <div className="p-6">
              <h3 className="card-title">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.hasButton && (
                  <Link
                    to="/login"
                    className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 text-secondary text-sm font-medium border border-secondary/50 hover:bg-secondary hover:text-black hover:border-secondary transition-all duration-300"
                  >
                    Acceso Restringido
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
            <div className="card-hover-gradient" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
