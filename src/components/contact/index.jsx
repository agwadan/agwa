import React from 'react';
import './contact.css';
import { MdOutlineAlternateEmail, MdWhatsapp } from 'react-icons/md';

const Contact = () => {
  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineAlternateEmail className='contact__option_icon' />
            <h4>Email</h4>
            <h5>agwa.dan@outlook.com</h5>
            <a href="mailto:agwa.dan@outlook.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdWhatsapp className='contact__option_icon' />
            <h4>WhatsApp</h4>
            <h5>+256-705-530-039</h5>
            <a href="https://api.whatsapp.com/send?phone+256705530039" target='_blank'>Send a message</a>
          </article>
        </div>


        <form action='https://formsubmit.co/06a77b826c8a8283b725342c1195b838' method='POST'>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email Address' required />
          <textarea name='message' placeholder='Your Message' required />
          <button type='submit' onClick={e => e.target.reset()} className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}
export default Contact;