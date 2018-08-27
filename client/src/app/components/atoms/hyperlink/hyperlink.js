//====================================================|
// HYPERLINK


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './hyperlink.scss';


//--------------------------| Component

const Hyperlink = ({ children, handleClick }) => (
  <a
    className={styles.root}
    onClick={handleClick}
  >
    {children}
  </a>
);


//--------------------------| Export

export default Hyperlink;
