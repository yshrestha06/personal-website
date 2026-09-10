import "../css/Projects.css";

const PROJECTS = [
  {
    title: "Fitness Tracker Web Application",
    date: "Ongoing",
    description:
      "Full-stack app for workout and fitness data management with RESTful APIs supporting full CRUD operations for workout data and exercise history, and a responsive React frontend built on reusable components.",
    tech: "Java, React, Spring Boot, PostgreSQL",
    link: "https://github.com/yshrestha06/Fitness-Tracker",
  },
  {
    title: "Personal Website",
    date: "Fall 2025",
    description:
      "This site. A full-stack personal website with a REST API that validates and stores contact form submissions in MongoDB Atlas via Mongoose, connecting the React frontend to an Express backend end to end.",
    tech: "React, Express.js, REST API, MongoDB",
    link: "https://github.com/yshrestha06/personal-website",
  },
  {
    title: "Multi-Client Chat Application",
    date: "Spring 2025",
    description:
      "A multi-threaded client-server chat system supporting concurrent users, private messaging, and live user-list updates using Java socket programming and thread synchronization.",
    tech: "Java, Sockets, Multithreading",
    link: "https://github.com/yshrestha06/Multi-Client-Chat-Application",
  },
  {
    title: "Interactive Dress-Up Game",
    date: "Ongoing",
    description:
      "A browser-based dress-up game with character selection, customizable outfits, and dynamic backgrounds, focused on state management and reusable, component-driven UI.",
    tech: "React.js, CSS",
    link: "https://github.com/yshrestha06/dress-up-game",
  },
  {
    title: "Tic-Tac-Toe",
    date: "2024",
    description:
      "A Tic-Tac-Toe game built with React featuring turn tracking, winner detection, draw detection, and a clean interface.",
    tech: "React",
    link: "https://github.com/yshrestha06/Tic-Tac-Toe",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-head">
              <h2>{p.title}</h2>
              <span className="project-date">{p.date}</span>
            </div>
            <p>{p.description}</p>
            <p className="tech">{p.tech}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
