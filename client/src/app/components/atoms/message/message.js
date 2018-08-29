//====================================================|
// MESSAGE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './message.scss';


//--------------------------| Component

const Message = ({ children, className }) => (
  <div className={`${styles.root} ${className || ''}`}>
    <p className={styles.paragraph}>
      { children }
    </p>
  </div>
);


//--------------------------| Export

export default Message;
