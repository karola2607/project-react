import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {infoData} from '../../data/dataStore.js';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <h1 className={styles.title}>{infoData.title}</h1>
    <h2 className={styles.subtitle}>{infoData.subtitle}</h2>
    <Hero titleText={infoData.imageTitle} image={infoData.image}/>
    <p className={styles.content}>{infoData.content}</p>
  </Container>
);

export default Info;