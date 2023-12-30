import React, { useState } from "react";
import "./nav.css";
import Switch from "react-switch";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMail,
} from "react-icons/ai";
import { IoSunnyOutline, IoMoon } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { useTheme } from "../../ThemeContext";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const { toggleTheme, lightMode } = useTheme();
  const lightIcon = <IoSunnyOutline />;
  const darkIcon = <IoMoon color="white" />;
  return (
    <nav>
      <div className="nav__item">
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />{" "}
        </a>
        <span>Home</span>
      </div>

      <div className="nav__item">
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />{" "}
        </a>
        <span>About</span>
      </div>

      <div className="nav__item">
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <AiOutlineBook />{" "}
        </a>
        <span>Exp</span>
      </div>
      <div className="nav__item">
        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <BsBriefcase />{" "}
        </a>
        <span>Port</span>
      </div>
      <div className="nav__item">
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <AiOutlineMail />{" "}
        </a>
        <span>Contact</span>
      </div>
      <div className="nav__item">
        <Switch
          onChange={toggleTheme}
          checked={!lightMode}
          onColor="#4db5ff"
          offColor="#2c2c6c"
          /* checkedIcon={lightIcon}
        uncheckedIcon={darkIcon} */
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
        />
      </div>
    </nav>
  );
};

export default Nav;
