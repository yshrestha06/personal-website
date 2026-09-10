import "../css/Leadership.css";

const ROLES = [
  {
    org: "South Asian Intercultural Association, TCU",
    role: "President",
    date: "2025 — Present",
    description:
      "Lead the executive board and oversee organization operations and strategic planning. Plan and coordinate cultural, educational, and social events for the TCU community, and represent SAICA at university events. Previously served as Marketing Chair.",
  },
  {
    org: "Computer Science Society, TCU",
    role: "Member",
    date: "2024 — Present",
    description: "",
  },
  {
    org: "Society of Women Engineers, TCU",
    role: "Member",
    date: "2024 — Present",
    description: "",
  },
];

const HONORS = [
  { title: "Dean's Honor List", detail: "Every semester, Fall 2024 — Spring 2026" },
  { title: "TCU Scholar", detail: "Every semester, Fall 2024 — Spring 2026" },
  { title: "Top 10 Honor Graduate", detail: "2024" },
];

function Leadership() {
  return (
    <section className="leadership">
      <h1>Leadership &amp; Honors</h1>

      <div className="leadership-grid">
        <div className="roles-col">
          <h2 className="col-title">Organizations</h2>
          {ROLES.map((r) => (
            <div className="role-card" key={r.org}>
              <div className="role-head">
                <h3>{r.role}</h3>
                <span className="role-date">{r.date}</span>
              </div>
              <p className="role-org">{r.org}</p>
              {r.description && <p className="role-desc">{r.description}</p>}
            </div>
          ))}
        </div>

        <div className="honors-col">
          <h2 className="col-title">Honors &amp; Awards</h2>
          <ul className="honors-list">
            {HONORS.map((h) => (
              <li key={h.title}>
                <span className="honor-title">{h.title}</span>
                <span className="honor-detail">{h.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
