import "../css/Contact.css";
import MessageForm from "./MessageForm";


function Contact() {
  return (
    <section className="contacts">
      <h1>Contact</h1>

      <div className="icon-row">
        {/* LinkedIn */}
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/yashaswi-shrestha-5737b4346"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>

        {/* GitHub */}
        <a
          className="icon-link"
          href="https://github.com/yshrestha06"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GitHubIcon />
        </a>

        {/* Email (mailto) */}
        <a
          className="icon-link"
          href="mailto:yshrestha2006@gmail.com"
          title="Email"
        >
          <EmailIcon />
        </a>
        
      </div>
      <div id="message-form">
        <MessageForm />
      </div>
    </section>
  );
}

/* ===== ICONS ===== */

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.5h-4v16zM8.5 7.5h3.83v2.18h.05c.53-1 1.82-2.18 3.74-2.18 4 0 4.74 2.64 4.74 6.07v9.43h-4v-8.37c0-2-.04-4.57-2.79-4.57-2.79 0-3.22 2.18-3.22 4.43v8.51h-4v-16z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon">
      <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.13 3.29 9.48 7.86 11.02.58.11.79-.26.79-.57 0-.28-.01-1.02-.02-2-3.2.71-3.88-1.58-3.88-1.58-.52-1.37-1.27-1.74-1.27-1.74-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.21 1.75 1.21 1.02 1.79 2.68 1.27 3.33.97.1-.76.4-1.27.72-1.56-2.55-.3-5.23-1.31-5.23-5.82 0-1.29.44-2.35 1.17-3.18-.12-.3-.51-1.52.11-3.18 0 0 .96-.31 3.14 1.21.91-.26 1.88-.39 2.85-.39.97 0 1.94.13 2.85.39 2.18-1.52 3.14-1.21 3.14-1.21.62 1.66.23 2.88.11 3.18.73.83 1.17 1.89 1.17 3.18 0 4.52-2.69 5.52-5.25 5.81.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.69.8.57 4.56-1.54 7.85-5.89 7.85-11.02C23.25 5.6 18.27.5 12 .5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="icon">
      <path d="M2 4h20v16H2V4zm10 7L4 6v12h16V6l-8 5z" />
    </svg>
  );
}
export default Contact;
