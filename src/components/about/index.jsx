import React from 'react';
import './about.css';
import ProfileImg from '/images/profile.png';
import { FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about_me_image">
            <img src={ProfileImg} alt="Profile Image" />
          </div>
        </div>

        <div className="about__content">
          {/*   <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years of Frontend Development</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years of Frontend Development</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years of Frontend Development</small>
            </article>
          </div> */}
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore doloremque nulla nihil, quaerat illum fugiat nostrum repellendus numquam. Reiciendis deserunt officiis quibusdam nam, sed tempore quas odit asperiores iure dignissimos incidunt dolorem ratione libero a aut in! Recusandae, pariatur nam eos nihil facilis harum reprehenderit?</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;