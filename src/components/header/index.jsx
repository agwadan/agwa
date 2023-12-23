import React, { useRef } from "react";
import "./header.css";
import CTA from "./CTA";
import ProfileImg from "/images/profile_2.jpg";
import HeaderSocials from "./HeaderSocials";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../ThemeContext";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { toggleTheme, lightMode } = useTheme();
  console.log("====================================");
  console.log(lightMode);
  console.log("====================================");
  return (
    <header ref={ref}>
      <button onClick={toggleTheme}>
        {lightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
      <div className="container header__container grid__2">
        <div className="left">
          <img className="smallscreen_img" src={ProfileImg} alt="" />
          <motion.h5
            initial={{ opacity: 0, y: -60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Hello I am
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Daniel Agwa
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Software Developer
          </motion.h5>
          <CTA />
          {/* Call to action */}
          <HeaderSocials />
        </div>

        <div className="right flex__y">
          <motion.div
            className="profile__img"
            initial={{ opacity: 0, x: 200 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
