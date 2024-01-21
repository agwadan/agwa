import React, { useRef } from "react";
import Resume from "/Resume_Daniel_Abraham_Agwa.pdf";
import { motion, useInView } from "framer-motion";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="cta" ref={ref}>
      <motion.a
        href={Resume}
        download
        className="btn"
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Download Resume
      </motion.a>
      <motion.a
        href="#contact"
        className="btn btn-primary"
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Let's talk
      </motion.a>
    </div>
  );
};

export default CTA;
