import React from 'react';
import './about.css';
import haris from "../../assets/haris.png";

const About = () => {
  return (
    <div className="haris_films__about">
        <div className="haris_films__about-content">
          <div className="haris_films__about-content-container">
            <div className="haris_films__about-profile-content-img-container">
              <div className="haris_films__about-profile-content-img">
                <img src={haris} alt="haris"/>
              </div>
            </div>
            <div className="haris_films__about-profile-content-container">
              <h1 className="haris_films__about-profile-content-h1">
                Hey, I'm Haris!
              </h1>
              <p className="haris_films__about-profile-content-p1">I’m a videographer and photographer based in Atlanta, GA. I’m obsessed with not only capturing life’s most cherished moments, but also producing high quality videos with my own creative touch. </p>
              <p className="haris_films__about-profile-content-p1">I specialize in event coverage, product/brand trailers, short films, and graduation photos.</p>
              <button type="button">Contact</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
