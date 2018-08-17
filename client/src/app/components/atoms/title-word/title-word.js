//====================================================|
// TITLE WORD


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './title-word.scss';


//--------------------------| Component

const TitleWord = ({ children, className }) => (
  <span className={`${styles.root} ${className}`}>
    {children}
  </span>
);


//--------------------------| Export

export default TitleWord;
