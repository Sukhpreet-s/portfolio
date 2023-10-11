import React from "react";

// styling
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home" style={{ background: "" }}>
      <h2 style={{ background: "" }}>About</h2>
      <p style={{ background: "" }}>
        The name's Sukhpreet Singh, and I am a Software Engineer <span role="img" aria-label="laptop">💻</span>  <br/><br/>
        I bring ideas to life <span role="img" aria-label="life">🪴</span> with various technologies.<br/><br/>
        I am currently investing my time into cloud architectures and DevOps, making application development more robust and accessible.
      </p>
    </div>
  );
}
