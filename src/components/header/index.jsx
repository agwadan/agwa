import React from 'react';
import CTA from '../CTA';
import ProfileImg from '../../../assets/images/profile.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Daniel Agwa</h1>
        <h5>Frontend Developer</h5>
        <CTA />
        <div className="profile-img">
          <img src={ProfileImg} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header;