import React, { useRef } from "react";
import { BsLinkedin, BsGithub, BsTwitterX } from "react-icons/bs";
import { motion, useInView } from "framer-motion";

const HeaderSocials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className="header__socials flex__x"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
};

export default HeaderSocials;
