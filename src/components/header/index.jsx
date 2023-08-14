import React from 'react';
import './header.css';
import CTA from './CTA';
import ProfileImg from '/images/profile.png'
import HeaderSocials from './HeaderSocials';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Header = () => {
  return (
    <header>
      <div className="container header__container grid__2">
        <div className="left">

          <img className='smallscreen_img' src={ProfileImg} alt="" />
          <h5>Hello I am</h5>
          <h1>Daniel Agwa</h1>
          <h5>Frontend Developer</h5>
          <CTA />{/* Call to action */}
          
        </div>

        <div className="right">
          <HeaderSocials />
          <div className="profile__img">
            <img src={ProfileImg} alt="" />
          </div>

          <a href="#contact" className="scroll__down">
            <AiOutlineArrowDown />
          </a>
        </div>
      </div>
    </header >
  )
}

export default Header;