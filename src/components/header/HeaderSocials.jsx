import React from "react";
import { BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials flex__x">
      <a
        href="https://www.linkedin.com/in/daniel-agwa-1019ab133/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/agwadan" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/agwa___" target="_blank">
        <BsTwitterX />
      </a>
    </div>
  );
};

export default HeaderSocials;
