import React from 'react';
import './header.css';
import test from "../../assets/test.mp4";

const Header = () => {
  return (
    <div className="haris_films__header">
      <div className="haris_films__header-content">
        <div className="haris_films__header-content-container">
          <h1 className="gradient_text">Haris Films</h1>
          <p>Bringing your moments to life, frame by frame.</p>
          <div className="haris_films__header-content-btns">
            <button type="button">View Portfolio</button>
          </div>
        </div>
        <div className="haris_films__header-content_video">
          <video autoPlay loop muted>
            <source src={test} type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  )
}

export default Header
