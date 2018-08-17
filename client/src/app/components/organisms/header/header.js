//====================================================|
// HEADER


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './header.scss';

// Molecules
import Title from '../../molecules/title';


//--------------------------| Component

const Header = props => (
  <header className={styles.root}>
    <Title />
  </header>
);


//--------------------------| Export

export default Header;
