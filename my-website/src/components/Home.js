import profilePic from "../assets/profile.JPG";
import "../css/Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-left">
        <div className="pic-frame">
          <img
            src={profilePic}
            alt="Yashaswi Shrestha"
            className="profile-pic"
          />
        </div>
      </div>

      <div className="home-right">
        <p className="eyebrow">Fort Worth, TX</p>
        <h1>Hi, I'm Yashaswi Shrestha</h1>
        <p className="lede">
          I'm a Computer Science student at Texas Christian University,
          minoring in Mathematics and General Business, building full-stack
          software and researching AI-native wireless networks.
        </p>
        <p>
          This site walks through my research, projects, and leadership as
          I continue learning and building.
        </p>

        <div className="home-actions">
          <a
            href="/Resume_Yashaswi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View Resume
          </a>
          <a href="#projects" className="secondary-link" onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}>
            See my work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
