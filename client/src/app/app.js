//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader';

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import styles from './app.scss';

// Atoms
import Stamp from './components/atoms/stamp';

// Molecules
//

// Organisms
import Header from './components/organisms/header';
import Main from './components/organisms/main';
import Footer from './components/organisms/footer';


//--------------------------| Component

const App = ({ gameState, scoresLength }) => (
  <div className={styles.root} data-status={gameState === 'win' ? 'win' : ''}>
    <div className={styles.inner}>
      <Header />
      { gameState && <Main /> }
      { scoresLength !== 0 && <Footer /> }
    </div>
    <Stamp />
  </div>
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  gameState: state.game.state,
  scoresLength: state.scores.length
});


//--------------------------| Export

export default connect(mapStateToProps)(hot(module)(App));
