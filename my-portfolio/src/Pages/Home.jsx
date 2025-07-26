import React from 'react';
import '../Styles/Home.css';
import profile from '../assets/profile.jpg';

function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <h2>Hello, I'm</h2>
        <h1>Alfisha / Alfi</h1>
        <h3>Web Developer</h3>
        <p>
          I'm an aspiring Web Developer with sights set on Google, but my journey won’t stop there.
          I aim to build a company of my own—surrounded by a team I trust and admire—where
          we rise together, chase bold ideas, and turn shared ambition into lasting impact.
        </p>
        <a href="#about" className="home-btn">About Me</a>
      </div>
      <div className="home-img">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Home;
