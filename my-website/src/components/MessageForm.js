import { useState } from "react";
import "../css/MessageForm.css";

function MessageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:8080/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to send message");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong");
    }
  }

  return (
    <div className="msg-wrap">
      <h2>Message Me</h2>

      <form className="msg-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </label>

        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            type="email"
            required
          />
        </label>

        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            rows={5}
            required
          />
        </label>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="ok">Sent! Thanks for reaching out.</p>
        )}
        {status === "error" && (
          <p className="err"> {errorMsg}</p>
        )}
      </form>
    </div>
  );
}

export default MessageForm;
