//====================================================|
// NUM


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './num.scss';


//--------------------------| Component

const Num = ({ children, className }) => (
  <span className={`${styles.root} ${className}`}>
    {children}
  </span>
);


//--------------------------| Export

export default Num;
