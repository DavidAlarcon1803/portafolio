import React from 'react';
import '../styles/Sections.css';

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      position: "DESARROLLADOR BACKEND",
      company: "Azteca International",
      period: "JUN/2023 - Presente",
      description: "Actualmente, me desempeño como Desarrollador Backend, enfocándome en el desarrollo y mantenimiento de bots de automatización utilizando JavaScript y Python. Mi rol principal consiste en optimizar los procesos internos mediante la implementación de herramientas de integración , colaborando estrechamente con los equipos técnicos para garantizar la eficiencia en los flujos de trabajo. Además, me encargo de documentar detalladamente las soluciones y brindar soporte técnico durante su implementación, asegurando la estabilidad operativa.",
      highlights: ["Automatización", "Python", "JavaScript", "Documentación", "PostgreSQL"],
    },
    {
      id: 2,
      position: "DESARROLLADOR FULL STACK",
      company: "PASAR LTDA",
      period: "JUN/2024 - MAY/2023",
      description: "En mi experiencia previa como Desarrollador Full Stack, lideré el análisis y desarrollo de soluciones técnicas integrales basadas en requerimientos funcionales. Diseñé APIs RESTful robustas utilizando Python (FastAPI) e integré funcionalidades frontend dinámicas con React. Mi trabajo incluyó el diseño y optimización de bases de datos PostgreSQL, la implementación de servicios en la nube con Microsoft Azure y la integración de sistemas externos mediante RabbitMQ. Todo esto se llevó a cabo bajo la metodología ágil Scrum, participando activamente en las ceremonias y garantizando la calidad del código mediante versionamiento con Git.",
      highlights: ["Full Stack", "Diseño de BD", "Integración de APIs", "Optimización"],
    },

  ];

  return (
    <section className="section-container">
      <div className="section-header">
        <h2 className="section-title-wrapper">
          <span className="section-hash">#</span>
          Experiencia Profesional
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="timeline-wrapper">
        {/* Línea vertical central */}
        <div className="timeline-line"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              {/* Punto del timeline */}
              <div className="timeline-dot">
                <div className="timeline-inner-dot"></div>
              </div>

              {/* Tarjeta de contenido (alterna izq/der) */}
              <div className={`timeline-content ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}>
                <div className="neon-card p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.position}</h3>
                    <p className="text-secondary font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span key={highlight} className="tech-pill">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;