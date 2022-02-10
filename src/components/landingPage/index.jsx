import React from 'react';
import styles from './LandingPage.module.css';
import { LinkedIn, GitHub } from '@material-ui/icons';


const LandingPage = () => {
  return (
    <div className={`${styles.Section1} Flex`}>
      <h3>Hi, my name is</h3>
      <h1>Agwa Daniel</h1>
      <h3>I am a Developer</h3>
      <div className={styles.Line} />
      <div className={`${styles.Social} Flex`}>
        <a href='https://github.com/agwadan' target='_blank'><GitHub /></a>
        <a href='https://www.linkedin.com/in/daniel-agwa-1019ab133/' target='_blank'><LinkedIn /></a>
      </div>
      <button class='DownloadResume'><a href='/src/assets/Resume.pdf' download>Download Resume</a></button>
    </div>
  )
}

export default LandingPage;