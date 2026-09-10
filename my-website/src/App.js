import './css/App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home />
      </section>
      <hr className="section-divider" />
      <section id="experience">
        <Experience />
      </section>
      <hr className="section-divider" />
      <section id="projects">
        <Projects />
      </section>
      <section id="leadership">
        <Leadership />
      </section>
      <hr className="section-divider" />
      <section id="socials">
        <Contact />
      </section>
    </div>
  );
}

export default App;
