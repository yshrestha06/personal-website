import "../css/Experience.css";

const ENTRIES = [
  {
    date: "Aug 2026 — Present",
    title: "Undergraduate Research Assistant",
    org: "Texas Christian University",
    description:
      "Contributing to a research initiative building a temporal dataset that trains AI models to predict how 6G wireless networks evolve over time, extending prior lab work on AI-based beamforming, channel estimation, and network telemetry. Building a DeepMIMO-based simulator to generate time-varying network states, then training and benchmarking LSTM and Transformer models on that data.",
    tags: ["Python", "Transformers", "DeepMIMO", "6G"],
  },
  {
    date: "Aug 2026",
    title: "AWS ReachBack Cohort",
    org: "Amazon Web Services, Austin, TX",
    description:
      "Selected as one of roughly 50 participants for an invite-only AWS and AI cohort covering cloud computing, artificial intelligence, and prompt engineering, while pursuing AWS certifications.",
    tags: ["AWS", "Cloud"],
  },
  {
    date: "Aug 2025 — Present",
    title: "Building Supervisor",
    org: "TCU University Unions, Fort Worth, TX",
    description:
      "Promoted from Event Specialist. Supervise student staff and daily building operations, coordinate event setup and teardown, and deliver and troubleshoot A/V equipment for on-campus events.",
    tags: ["Leadership", "Operations"],
  },
  {
    date: "Aug 2025",
    title: "Nepal–US AI Hackathon",
    org: "Virtual, 48 hours",
    description:
      "Built a React-based application that analyzed food images and generated nutritional and health-risk information, working in an Agile, cross-time-zone team to ship a functional prototype.",
    tags: ["React", "APIs", "Agile"],
  },
  {
    date: "May 2025 — Jul 2025",
    title: "React.js Development Workshop",
    org: "IpserLab, Remote",
    description:
      "Completed an intensive workshop on state management and component-based UI design, building interactive interfaces through group projects and peer code review.",
    tags: ["React"],
  },
];

function Experience() {
  return (
    <section className="experience">
      <h1>Experience</h1>
      <div className="timeline">
        {ENTRIES.map((entry, i) => (
          <div className="timeline-row" key={i}>
            <div className="timeline-date">{entry.date}</div>
            <div className="timeline-rule" />
            <div className="timeline-content">
              <h2>{entry.title}</h2>
              <p className="org">{entry.org}</p>
              <p>{entry.description}</p>
              <div className="tag-row">
                {entry.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
