import React from 'react';
import Contact from '../contact';

const LandingPage = () => {
  return (
    <div className='Grid'>
      <div className='Flex'>
        <h1>Agwa</h1>
      </div>
      <div className='Flex'>
        <Contact />
      </div>
    </div>
  )
}

export default LandingPage;