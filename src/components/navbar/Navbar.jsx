import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>                
      <p><a href="#home">Home</a></p>
      <p><a href="#work">Work</a></p>
      <p><a href="#pricing">Pricing</a></p>
      <p><a href="#contact">Contact</a></p>    
    </>
  )

  return (
    <div className="haris_films__navbar">
      <div className="haris_films__navbar-links">
        <div className="haris_films__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="haris_films__navbar-links_container">
          <Menu />
        </div>
        <div className="haris_films__navbar-menu">
          {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> }

          {toggleMenu && (
            <div className="haris_films__navbar-menu_container scale-up-center">
              <div className="haris_films__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
          </div>
      </div>
    </div>
  );
};

export default Navbar;
