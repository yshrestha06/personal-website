import '../css/Header.css';

function Header() {
  return(
    <header className="header">
       <div className="logo">Yashaswi Shrestha</div>
      <nav className="nav">
        <button onClick={() => scrollTo("home")}>Home</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("socials")}>Contact</button>
      </nav>
    </header>
  );
}

function scrollTo(id) {
  const section = document.getElementById(id);
  section?.scrollIntoView({behavior: "smooth"});
}

export default Header;