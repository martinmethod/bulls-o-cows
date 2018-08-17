//====================================================|
// LOGO


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './logo.scss';

// Icons
import logo from '../../../../assets/icons/logo.svg';


//--------------------------| Component

const Logo = ({ className }) => (
  <picture className={`${styles.root} ${className}`} dangerouslySetInnerHTML={{ __html: logo }} />
);


//--------------------------| Export

export default Logo;
