import React from 'react';
import '../styles/Sections.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "CONFIDENCIAL",
      description: "",
      technologies: [],
    },
    // ... otros proyectos (puedes copiar los mismos de antes)
    //  {
    //   id: 2,
    //   title: "App de Gestión de Tareas",
    //   description: "Aplicación colaborativa con actualizaciones en tiempo real y flujos de trabajo personalizables.",
    //   technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    // },
    // {
    //   id: 3,
    //   title: "Dashboard de Analíticas",
    //   description: "Panel de control para seguimiento de métricas con visualizaciones interactivas.",
    //   technologies: ["React", "D3.js", "Express", "MySQL"],
    // },
    // {
    //   id: 4,
    //   title: "Chatbot IA",
    //   description: "Asistente inteligente potenciado por machine learning y procesamiento de lenguaje natural.",
    //   technologies: ["Python", "FastAPI", "TensorFlow", "React"],
    // },
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
              {/* USAMOS LA NUEVA CLASE AQUÍ */}
              <h3 className="card-title">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-hover-gradient" />
          </div>
        ))}
      </div>

      {/* <div className="mt-12 text-center">
        <a href="#" className="btn-outline">
          Ver todos los proyectos
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div> */}
    </section>
  );
};

export default ProjectsSection;