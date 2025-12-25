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
          <h2>Project Two</h2>
          <p>
            Short description of the project and what you learned from it.
          </p>
          <p className="tech">Tech: Python, FastAPI</p>
          <a
            href="https://github.com/YOUR_GITHUB/project-two"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <h2>Project Three</h2>
          <p>
            Brief explanation of the project’s purpose.
          </p>
          <p className="tech">Tech: JavaScript, HTML, CSS</p>
          <a
            href="https://github.com/YOUR_GITHUB/project-three"
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
