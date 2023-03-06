import React from 'react';
import './service.css';

const Service = ({image, title, translate, scale}) => {
  return (
  <div className="haris_films__services-service">
    <img src={image} style={{marginLeft: translate, transform: `scale(${scale})`}} alt="image"/>
    <div className="haris_films__services-title">
      <button type="button">{title}</button>
    </div>
  </div>
  )
}

export default Service
