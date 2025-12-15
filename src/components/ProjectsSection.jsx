import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sections.css";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Gestor de Eventos",
      description: 
        "Desarrollo de una plataforma moderna para la gestión y compra de entradas a eventos, enfocada en demostrar experiencia con tecnologías actuales.\n\n" +
        "Cuenta con autenticación de usuarios, roles y gestión de eventos. La aplicación aprovecha plataformas gratuitas para despliegue y escalabilidad.\n\n" +
        "Frontend: El frontend se despliega en Vercel, integrado con GitHub para automatizar despliegues.\n\n" +
        "Backend: El backend está construido con Python y FastAPI. Se utilizan servicios gratuitos como Railway para desplegar la API principal, Neon para bases de datos y CloudAMQP para servicios de mensajería (RabbitMQ).",
      technologies: ["React", "Python", "FastAPI", "Vercel", "CloudAMQP"],
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
              <p className="text-gray-400 text-sm mb-6 leading-relaxed whitespace-pre-line">
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
                    Ir al Proyecto.
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
