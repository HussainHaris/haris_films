import React from 'react';
import './header.css';
import test from "../../assets/test.mp4";

const Header = () => {
  return (
    <div className="haris_films__header">
      <div className="haris_fims__header-content">
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
