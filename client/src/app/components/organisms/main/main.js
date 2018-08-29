//====================================================|
// MAIN


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import styles from './main.scss';

// Database
import systemDatabase from '../../../../database/system.json';

// Actions
import { newGame } from '../../../actions/game';

// Atoms
import Button from '../../atoms/button';
import Message from '../../atoms/message';

// Organisms
import InputForm from '../input-form';
import Guesses from '../guesses';


//--------------------------| Component

const Main = ({ gameState, dispatch }) => (
  <main className={styles.root}>
    <div className={styles.body}>
      <div className={styles.new}>
        <Button
          onClick={() => {
            dispatch(newGame());
          }}
        >
          { systemDatabase.labels.buttons.newgame }
        </Button>
      </div>

      <InputForm className={styles.inputForm} />

      <div className={styles.playground}>
        {
          gameState === 'win' &&
          <Message
            className={styles.winLabel}
          >
            {systemDatabase.labels.messages.win}
          </Message>
        }

        <Guesses className={styles.guesses} />
      </div>
    </div>
  </main>
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  gameState: state.game.state
});


//--------------------------| Export

export default connect(mapStateToProps)(Main);
