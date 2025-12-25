import './css/App.css';
import Header from "./components/Header";
import Home from "./components/Home"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <>
    <Header />
    <section id="home">
      <Home />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="socials">
      <Contact />
    </section>
    </>
  )
}

export default App;
