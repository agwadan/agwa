import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMail } from 'react-icons/ai';

const Nav = () => {
  return (
    <nav>
      <a className='active' href="#"><AiOutlineHome /> </a>
      <a href="#about"><AiOutlineUser /> </a>
      <a href="#experience"><AiOutlineBook /> </a>
      <a href="#contacts"><AiOutlineMail /> </a>
    </nav>
  )
}

export default Nav;