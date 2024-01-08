import React, { useRef } from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="experience" ref={ref}>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container grid__2">
        <motion.div
          className="experiece__frontend"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          whileHover={{
            backgroundColor: "transparent",
            transition: { duration: 0.4 },
          }}
        >
          <h3>Frontend Development</h3>
          <div className="experience__content grid__2">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>Vue</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </motion.div>

        <motion.div
          className="experiece__backend"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h3>Backend Development</h3>
          <div className="experience__content grid__2">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
