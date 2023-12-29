import React, { useRef } from "react";
import "./about.css";
import ProfileImg from "/images/profile_3.jpg";
import { motion, useInView } from "framer-motion";
import { FaAward } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container" ref={ref}>
        <motion.div
          className="about__me"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="about_me_image">
            <img src={ProfileImg} alt="Profile Image" />
          </div>
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p>
            Hello, my name is Daniel Agwa and I am a frontend software
            developer. With several years of experience in the field, I have
            honed my skills in HTML, CSS, JavaScript, and other key frontend
            technologies. I am passionate about building beautiful, responsive,
            and user-friendly interfaces that improve the user experience. As a
            dedicated learner, I am always exploring new technologies and
            techniques to stay ahead of the curve. When I'm not coding, I enjoy
            spending time outdoors, making music, and traveling.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
