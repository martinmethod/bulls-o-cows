//====================================================|
// LOGO


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './logo.scss';

// Icons
import LogoSVG from '../../../../assets/icons/logo.svg';


//--------------------------| Component

const Logo = ({ className }) => (
  <picture className={`${styles.root} ${className}`}>
    <LogoSVG />
  </picture>
);


//--------------------------| Export

export default Logo;
