import React from 'react';

function Projects() {

  const projects = [
    {
      id: 1,
      name: "Sistema di Gestione Clinica",
      description: "Un'applicazione robusta sviluppata in Java per la gestione di una clinica, permettendo la ricerca e la visualizzazione degli appuntamenti dei pazienti con i relativi medici. Utilizza un doppio sistema di persistenza dati con MySQL per i dati strutturati e MongoDB per dati più flessibili, con dati da inserire.",
      technologies: ["Java", "MySQL", "MongoDB", "Spring Boot", "JDBC/Spring Data"],
      features: [
        "Ricerca e visualizzazione di appuntamenti per paziente e dottore.",
        "Gestione integrata di dati strutturati (MySQL) e non strutturati (MongoDB).",
        "Dati da inserire contenuti nella repository.",
        "Architettura modulare per facilitare l'espansione delle funzionalità."
      ],
      githubLink: "https://github.com/Jomat22/java-database-capstone/tree/main", 
     
    },
    {
      id: 2,
      name: "LittleLemon - Sistema di Prenotazione Ristorante",
      description: "Un'applicazione web moderna per la gestione delle prenotazioni di un ristorante, caratterizzata da un backend robusto con Django e un database MySQL.",
      technologies: ["Django", "Python", "MySQL", "Django REST Framework", "Migrations"],
      features: [
        "Creazione di prenotazioni utente con data, ora e numero di persone.",
        "Gestione persistente delle prenotazioni nel database MySQL.",
        "API RESTful per la comunicazione efficiente con il frontend.",
        "Interfaccia amministrativa di Django per una facile gestione dei dati.",
        "Scalabilità e sicurezza garantite dalle tecnologie backend."
      ],
      githubLink: "https://github.com/Jomat22/LittleLemon",
      
    }
    
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">I Miei Progetti</h2>
      <ul className="project-list">
        {projects.map(project => (
          <li key={project.id} className="project-item">
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              
              <h4>Tecnologie Utilizzate:</h4>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <h4>Funzionalità Principali:</h4>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-links">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.liveDemoLink && (
                <a 
                  href={project.liveDemoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Demo Live
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;