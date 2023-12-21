import React from "react";
import "./header.css";
import CTA from "./CTA";
import ProfileImg from "/images/profile.png";
import HeaderSocials from "./HeaderSocials";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="container header__container grid__2">
        <div className="left">
          <img className="smallscreen_img" src={ProfileImg} alt="" />
          <h5>Hello I am</h5>
          <h1>Daniel Agwa</h1>
          <h5>Software Developer</h5>
          <CTA />
          {/* Call to action */}
          <HeaderSocials />
        </div>

        <div className="right flex__y">
          <motion.div
            className="profile__img"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={ProfileImg} alt="" />
          </motion.div>
        </div>
        <a href="#contact" className="scroll__down">
          <BsChevronDoubleDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
