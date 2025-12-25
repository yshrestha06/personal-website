import "../css/Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <h2>Multi Client Chat Application </h2>
          <p>
            A multi-threaded client-server chat system with private messaging and live user list updates using Java sockets and concurrency. 
          </p>
          <p className="tech">Tech: Java </p>
          <a
            href="https://github.com/yshrestha06/Multi-Client-Chat-Application"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <h2>Personal Website</h2>
          <p>
            Full-stack personal website. </p>
          <p className="tech">Tech: React, Spring Boot, REST API</p>
          <a
            href="https://github.com/yshrestha06/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
