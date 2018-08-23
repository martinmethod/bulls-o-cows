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

const Footer = ({ scores }) => (
  <footer className={styles.root}>
    {scores.list && <Hyperlink>{systemDatabase.labels.links.shots}</Hyperlink>}
  </footer>
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  scores: state.scores
});


//--------------------------| Export

export default connect(mapStateToProps)(Footer);
