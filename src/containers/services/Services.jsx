import React from 'react';
import './services.css';
import { Service } from '../../components';
import { event_coverage, graduation_photos, creative_works } from './imports';

const Services = () => {
  return (
    <div className="haris_films__services">
      <h1 className="haris_films__services-header">Services</h1>
        <div className="haris_films__services-container">
          <Service image={event_coverage} title={"Event Coverage"} translate={"-3rem"} scale={1.0} />
          <Service image={graduation_photos} title={"Graduation Photos"} translate={"-9rem"} scale={1.0}/>
          <Service image={creative_works} title={"Creative Works"} translate={"5rem"} scale={1.8}/>
        </div>
    </div>
  )
}

export default Services
