//====================================================|
// STAMP


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './stamp.scss';

// Icons
import logo from '../../../../assets/icons/logo.svg';


//--------------------------| Component

const Stamp = props => (
  <picture className={styles.root} dangerouslySetInnerHTML={{ __html: logo }} />
);


//--------------------------| Export

export default Stamp;
