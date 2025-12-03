import React from 'react';
import '../styles/Sections.css';

const TechnologiesSection = () => {
  const technologies = {
    Frontend: [
      { name: "React", level: "Intermedio", experience: "Utilizo React para construir interfaces de usuario modernas y escalables. Mi experiencia se centra en la integración efectiva de funcionalidades frontend conectadas a servicios backend, asegurando que la aplicación no solo se vea bien, sino que responda de manera ágil a los datos del servidor." },
      { name: "JavaScript", level: "Intermedio", experience: "Como base de mi desarrollo web, domino JavaScript tanto para crear interactividad en el navegador como para soluciones de lógica compleja. Aplico este lenguaje no solo en el desarrollo de aplicaciones, sino también en la creación y mantenimiento de bots para la automatización de procesos y optimización de flujos de trabajo." },
      { name: "TypeSIntegración de Servicios (Frontend)cript", level: "Intermedio", experience: "Me especializo en conectar el 'lado del cliente' con arquitecturas robustas. Tengo experiencia consumiendo APIs RESTful y asegurando una comunicación fluida entre la interfaz gráfica y los sistemas de gestión de datos o servicios externos, garantizando una experiencia de usuario coherente y funcional." },
    ],
    Backend: [
      { name: "Python (FastAPI y Django)", level: "Avanzado", experience: "Cuento con conocimientos en Java, lo que me permite trabajar en entornos empresariales que requieren tipado estático fuerte y una arquitectura orientada a objetos sólida." },
      { name: "Desarrollo con Java:", level: "Básico", experience: "Cuento con conocimientos en Java, lo que me permite trabajar en entornos empresariales que requieren tipado estático fuerte y una arquitectura orientada a objetos sólida." },
      { name: "Gestión de Bases de Datos (PostgreSQL y MySQL)", level: "Intermedio", experience: "Diseño, mantengo y optimizo esquemas de bases de datos relacionales en PostgreSQL y MySQL. Mi enfoque no es solo almacenar datos, sino garantizar su integridad y optimizar las consultas para asegurar la velocidad de respuesta de las aplicaciones." },
    ],
    Herramientas: [
      { name: "Docker y Contenerización:", level: "Intermedio", experience: "Implemento Docker para estandarizar entornos de desarrollo. Utilizo contenedores específicamente para replicar errores del servidor en entornos locales, lo que me permite depurar fallos de manera aislada y segura sin afectar la producción." },
      { name: "Microsoft Azure e Integración SSO", level: "Intermedio", experience: "Implemento soluciones en la nube con Microsoft Azure para el despliegue de servicios. Tengo experiencia integrando sistemas de autenticación, incluyendo la conexión con el Single Sign-On (SSO) de Microsoft para gestionar accesos seguros y centralizados." },
      { name: "RabbitMQ y Tareas Programadas", level: "Intermedio", experience: "Integro servicios utilizando RabbitMQ como gestor de colas de mensajería. Lo utilizo para orquestar la comunicación entre microservicios y manejar tareas programadas asíncronas, asegurando que los procesos pesados no bloqueen la experiencia del usuario principal." },
    ],
    Habilidades: [
      { name: "Automatización de Procesos (Python y JavaScript)", level: "Intermedio", experience: "Diseño y mantengo bots de automatización utilizando la versatilidad de JavaScript y la potencia de Python. Estas herramientas me permiten eliminar tareas manuales repetitivas, optimizando los flujos de trabajo internos y reduciendo el margen de error humano." },
      { name: "Levantamiento de Requerimientos Técnicos", level: "Avanzado", experience: "Realizo un análisis detallado para el levantamiento de requerimientos. Tengo la capacidad de traducir necesidades funcionales de negocio en especificaciones técnicas claras, separando las responsabilidades del sistema y planificando una arquitectura lógica antes de escribir código." },
    ],
  };

  return (
    <section className="section-container">
      <div className="section-header">
        <h2 className="section-title-wrapper">
          <span className="section-hash">#</span>
          Tecnologías
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category} className="neon-card p-8">
            <h3 className="text-2xl font-semibold mb-8 text-secondary">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techs.map((tech) => (
                <div key={tech.name} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-secondary/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-white">{tech.name}</span>
                    <span className="tech-pill">{tech.level}</span>
                  </div>
                  <p className="text-sm text-gray-400">{tech.experience}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;