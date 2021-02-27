import styles from './Hero.scss';
import React from 'react';

const Hero = props => (
    <header className={styles.component}>
  		<h2 className={styles.title}>{props.titleText}</h2>
  		<img className={styles.image} src="https://i.postimg.cc/ZRCPy6Tm/space.png" alt="cosmos"/>
      </header>
  );


export default Hero;