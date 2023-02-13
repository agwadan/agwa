import React from 'react';
import styles from './LandingPage.module.css';
import ProfileImage from '../../../assets/images/profile.png';


const LandingPage = () => {
  return (
    <div className="Grid">
      <div className="left">
        <div className="flex">
          <h1>Hi I am</h1>
          <h1>Agwa Daniel</h1>
          <h4>Frontend Developer</h4>
        </div>
      </div>
      <div className="right">
        <nav>
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </ul>
        </nav>
        <img src={ProfileImage} alt="Profile Picture" />
      </div>
    </div>
  )
}

export default LandingPage;