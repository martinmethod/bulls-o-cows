//====================================================|
// FOOTER


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './footer.scss';

// Atoms
import Scores from '../scores';


//--------------------------| Component

const Footer = () => (
  <footer className={styles.root}>
    <Scores />
  </footer>
);


//--------------------------| Export

export default Footer;
