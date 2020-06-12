import React from "react";

export default function About() {
  return (
    <div>
      <h2>About this website</h2>

      <div style={{ textAlign: "center" }}>
        <img alt="React Logo Sticker" src="/react-sticker.png" />
        <p>
          This website is powered by React and uses the{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://reacttraining.com/react-router/"
          >
            <code>react-router-dom</code>
          </a>{" "}
          package for page navigation.
        </p>
        <p>
          Created by Jonathan Cutrer{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://jcutrer.com"
          >
            Website
          </a>{" "}
          |{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/joncutrer"
          >
            GitHub
          </a>
        </p>
        <br />
      </div>
    </div>
  );
}
