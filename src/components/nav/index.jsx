import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineMail } from 'react-icons/ai';

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /> </a>
      <a href="#about"><AiOutlineUser /> </a>
      <a href="#experience"><AiOutlineBook /> </a>
      {/*  <a href="#"><AiOutlineHome /> </a> */}
      <a href="#contacts"><AiOutlineMail /> </a>
    </nav>
  )
}

export default Nav;