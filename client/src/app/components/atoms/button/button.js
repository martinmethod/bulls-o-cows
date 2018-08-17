//====================================================|
// BUTTON


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './button.scss';


//--------------------------| Component

const Button = props => (
  <button
    className={styles.root}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);


//--------------------------| Export

export default Button;
