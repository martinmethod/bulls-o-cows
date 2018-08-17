//====================================================|
// FOOTER


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import styles from './footer.scss';

// Database
import systemDatabase from '../../../../database/system.json';

// Atoms
import Hyperlink from '../../atoms/hyperlink';


//--------------------------| Component

const Footer = props => (
  <footer className={styles.root}>
    {props.scores.list && <Hyperlink>{systemDatabase.labels.links.shots}</Hyperlink>}
  </footer>
);


//--------------------------| State to Props

const mapStateToProps = state => state;


//--------------------------| Export

export default connect(mapStateToProps)(Footer);
