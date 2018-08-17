//====================================================|
// STAMP


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './stamp.scss';

// Icons
import LogoSVG from '../../../../assets/icons/logo.svg';


//--------------------------| Component

const Stamp = props => (
  <picture className={styles.root}>
    <LogoSVG />
  </picture>
);


//--------------------------| Export

export default Stamp;
