import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineAlternateEmail, MdWhatsapp } from "react-icons/md";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  console.log("====================================");
  console.log(ref.current);
  console.log("====================================");
  return (
    <section id="contact" ref={ref}>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <motion.div
          className="contact__options"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <article className="contact__option">
            <MdOutlineAlternateEmail className="contact__option_icon" />
            <h4>Email</h4>
            <h5>agwa.dan@outlook.com</h5>
            <a href="mailto:agwa.dan@outlook.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdWhatsapp className="contact__option_icon" />
            <h4>WhatsApp</h4>
            <h5>+256-705-530-039</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+256705530039"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </motion.div>

        <form
          action="https://formsubmit.co/06a77b826c8a8283b725342c1195b838"
          method="POST"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            required
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          />

          <motion.button
            type="submit"
            onClick={(e) => e.target.reset()}
            className="btn btn-primary"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
