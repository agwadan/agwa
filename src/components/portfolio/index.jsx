import React from 'react';
import './portfolio.css';
import Portfolio1 from '../../../assets/images/portfolio_1.png';
import Portfolio2 from '../../../assets/images/portfolio_2.png';
import Portfolio3 from '../../../assets/images/portfolio_3.png';
import Portfolio4 from '../../../assets/images/portfolio_4.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portolio__item_image">
            <img src={Portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a href="https://github.com/agwadan" className='btn'>Github</a>
            <a href="https://agwa.netlify.app" className='btn btn-primary' target='_blank'>Agwa</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portolio__item_image">
            <img src={Portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a href="https://github.com/agwadan" className='btn'>Github</a>
            <a href="https://agwa.netlify.app" className='btn btn-primary' target='_blank'>Agwa</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portolio__item_image">
            <img src={Portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item_cta">
            <a href="https://github.com/agwadan" className='btn'>Github</a>
            <a href="https://agwa.netlify.app" className='btn btn-primary' target='_blank'>Agwa</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portolio__item_image">
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