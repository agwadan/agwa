import React from 'react';
import './header.css';
import CTA from './CTA';
import ProfileImg from '../../../assets/images/profile.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Daniel Agwa</h1>
        <h5>Frontend Developer</h5>
        <CTA />{/* Call to action */}
        <HeaderSocials />
        <div className="profile__img">
          <img src={ProfileImg} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header;