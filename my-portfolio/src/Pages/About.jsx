import React from 'react';
import '../Styles/About.css';
import sketch from '../assets/sketch.jpeg';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2>About Me</h2>
        <h3>
          <span className="highlight">Computer Science Student</span><br />
          who wants to be an <span className="highlight">Entrepreneur</span>
        </h3>
        <p>
          I'm Alfisha — a frontend developer and UI/UX designer with a heart tuned to aesthetics and a mind wired for interaction.
          I craft interfaces that don’t just function — they feel. In every pixel, I seek delight — creating visuals that please the eye
          and stories that move through screens.
        </p>
        <a href="/projects" className="about-btn">View Portfolio</a>
      </div>
      <div className="about-img">
        <img src={sketch} alt="sketch" />
      </div>
    </section>
  );
}

export default About;
