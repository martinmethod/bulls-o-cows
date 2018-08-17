//====================================================|
// TITLE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './title.scss';

// Atoms
import TitleWord from '../../atoms/title-word';
import Logo from '../../atoms/logo';


//--------------------------| Component

const Title = props => (
  <div className={styles.root}>
    <TitleWord className={styles.titleWord}>Bulls</TitleWord>
    <Logo className={styles.logo} />
    <TitleWord className={styles.titleWord}>Cows</TitleWord>
  </div>
);


//--------------------------| Export

export default Title;
