//====================================================|
// GUESS


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './guess.scss';


//--------------------------| Component

const Guess = ({ children, className }) => (
  <span className={`${styles.root} ${className}`}>
    {children}
  </span>
);


//--------------------------| Export

export default Guess;
