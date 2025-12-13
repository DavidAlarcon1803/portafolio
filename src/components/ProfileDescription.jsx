import React from "react";
import "../styles/Profile.css";

export default function ProfileDescription() {
  const techs = [
    "React",
    "Next.js",
    "javaScript",
    "java",
    "Python",
    "Django",
    "FastAPI",
    "Azure",
    "Docker",
    "SQL",
    "RabbitMQ",
    "postgreSQL",
    "Web Design",
  ];

  return (
    <div className="description-container">
      <div className="space-y-4">
        <h1 className="hero-title">
          Efren David <br />
          <span className="gradient-text">Alarcon Muñoz</span>
        </h1>

        <p className="hero-text">
          Desarrollador Full Stack caracterizado por su versatilidad y enfoque
          en la calidad del código. Con experiencia práctica en la creación de
          APIs RESTful, automatización de procesos y despliegue en la nube con
          Azure, posee una sólida base en tecnologías como Python (FastAPI,
          Django) y React. Se distingue por su agilidad para aprender e
          implementar nuevas herramientas tecnológicas, buscando constantemente
          desafíos que le permitan expandir su dominio técnico y aportar
          soluciones innovadoras en entornos de desarrollo dinámicos.
        </p>
      </div>

      <div className="specialties-box">
        <h3 className="specialties-label">Especialidades</h3>
        <div className="tags-container">
          {techs.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
