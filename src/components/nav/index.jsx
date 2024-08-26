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
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { useTheme } from "../../ThemeContext";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const { toggleTheme, lightMode } = useTheme();
  const lightIcon = <IoSunnyOutline />;
  const darkIcon = <IoMoon color="white" />;
  return (
    <nav>
      <div className="nav__item">
        <Tooltip
          placement="top"
          trigger={["hover"]}
          overlay="Home"
          mouseLeaveDelay="0.1"
        >
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome />{" "}
          </a>
        </Tooltip>
      </div>

      <div className="nav__item">
        <Tooltip
          placement="top"
          trigger={["hover"]}
          overlay="About Me"
          mouseLeaveDelay="0.1"
        >
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <AiOutlineUser />{" "}
          </a>
        </Tooltip>
      </div>

      <div className="nav__item">
        <Tooltip
          placement="top"
          trigger={["hover"]}
          overlay="Experience"
          mouseLeaveDelay="0.1"
        >
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <AiOutlineBook />{" "}
          </a>
        </Tooltip>
      </div>

      <div className="nav__item">
        <Tooltip
          placement="top"
          trigger={["hover"]}
          overlay="Portfolio"
          mouseLeaveDelay="0.1"
        >
          <a
            href="#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ? "active" : ""}
          >
            <BsBriefcase />{" "}
          </a>
        </Tooltip>
      </div>

      <div className="nav__item">
        <Tooltip
          placement="top"
          trigger={["hover"]}
          overlay="Contact Me"
          mouseLeaveDelay="0.1"
        >
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <AiOutlineMail />{" "}
          </a>
        </Tooltip>
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
