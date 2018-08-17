//====================================================|
// HYPERLINK


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './hyperlink.scss';


//--------------------------| Component

const Hyperlink = ({ children }) => (
  <a className={styles.root}>
    {children}
  </a>
);


//--------------------------| Export

export default Hyperlink;
