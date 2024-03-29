import React from 'react';
import './footer.css';
import { BsLinkedin, BsGithub, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Agwa</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/daniel-agwa-1019ab133/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/agwadan" target='_blank'><BsGithub /></a>
        <a href="https://twitter.com/agwa___" target='_blank'><BsTwitterX/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Agwa. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
