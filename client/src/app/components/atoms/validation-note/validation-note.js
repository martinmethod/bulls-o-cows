//====================================================|
// VALIDATION NOTE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './validation-note.scss';


//--------------------------| Component

const ValidationNote = ({ children }) => (
  <p className={styles.root}>
    {children}
  </p>
);


//--------------------------| Export

export default ValidationNote;
