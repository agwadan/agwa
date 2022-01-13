import React from 'react';
import styles from './LandingPage.module.css';


const LandingPage = () => {
  return (
    <div className={`${styles.Section1} Flex`}>
      <h3>Hi, my name is</h3>
      <h1>Agwa Daniel</h1>
      <h3>I am a Developer</h3>
      <div className={styles.Line} />
    </div>
  )
}

export default LandingPage;