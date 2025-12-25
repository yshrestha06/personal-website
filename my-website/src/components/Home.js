import profilePic from "../assets/profile.JPG";
import "../css/Home.css";

function Home() {
  return (
  <section className="home">
    <div className="home-left">
      <img 
      src={profilePic}
      alt="Profile"
      className="profile-pic"
      />
    </div>

    <div className="home-right">
      <h1> Hi, I'm Yashaswi Shrestha
      </h1>
      <p> I am a computer science student at Texas Christian University</p>
      <p> This website is a place to show my  stuff</p>

      <a 
        href="/Resumebt.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-button"
        >
          Resume
        </a>

    </div>
  </section>
  );
}

export default Home;