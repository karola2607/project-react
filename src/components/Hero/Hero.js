import styles from './Hero.scss';
import React from 'react';

const Hero = function(){
  const content = (
    <header className={styles.component}>
  		<h2 className={styles.title}>Things to do</h2>
  		<img className={styles.image} src="https://i.postimg.cc/ZRCPy6Tm/space.png" alt="cosmos"/>
      </header>
  );

  return content;
};

export default Hero;