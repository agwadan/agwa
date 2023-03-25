import React from 'react';
import './portfolio.css';
import data from '../../data/portfolioData';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={Portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a href="https://github.com/agwadan" className='btn'>Github</a>
            <a href="https://agwa.netlify.app" className='btn btn-primary' target='_blank'>Agwa</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={Portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a href="https://github.com/agwadan" className='btn'>Github</a>
            <a href="https://agwa.netlify.app" className='btn btn-primary' target='_blank'>Agwa</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={Portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a href="https://github.com/agwadan" className='btn'>Github</a>
            <a href="https://agwa.netlify.app" className='btn btn-primary' target='_blank'>Agwa</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item_image">
            <img src={Portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a href="https://github.com/agwadan" className='btn'>Github</a>
            <a href="https://agwa.netlify.app" className='btn btn-primary' target='_blank'>Agwa</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio;