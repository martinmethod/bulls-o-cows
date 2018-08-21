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

// Icons
import EnterSVG from '../assets/icons/enter.svg';

// Database
import systemDatabase from '../database/system.json';

// Actions
import { newGame, addGuess, validateInput } from './actions/game';

// Atoms
import Button from './components/atoms/button';
import Stamp from './components/atoms/stamp';
import Input from './components/atoms/input';
import Message from './components/atoms/message';
import ValidationNote from './components/atoms/validation-note';

// Molecules
//

// Organisms
import Header from './components/organisms/header';
import Guesses from './components/organisms/guesses';
import Footer from './components/organisms/footer';


//--------------------------| Definitions

const {
  checked
} = systemDatabase.labels.validation;


//--------------------------| Component

class App extends React.Component {
  componentDidMount() {
    if (!this.props.number) {
      this.props.dispatch(newGame());
    }
  }

  render() {
    const {
      win,
      number,
      input,
      guesses,
      scores,
      dispatch
    } = this.props;

    return (
      <div className={styles.root} data-status={win ? 'win' : ''}>
        <div className={styles.inner}>
          <Header />
          {
            number && (
              <main className={styles.main}>
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

                  <form className={styles.inputForm}>
                    <Input />
                    {
                      input.validateMessage !== '' && <ValidationNote>{input.validateMessage}</ValidationNote>
                    }
                    {
                      input.value.length === 4 && !win && (
                        <picture
                          className={styles.enter}
                          onClick={() => {
                            if (guesses.find(g => g.guess === input.value)) {
                              dispatch(validateInput(checked));
                            }
                            else {
                              dispatch(addGuess(input.value));
                            }
                          }}
                        >
                          <EnterSVG />
                        </picture>
                      )
                    }
                  </form>

                  <div className={styles.playground}>
                    {
                      win &&
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
            )
          }
          { scores.length !== 0 && <Footer /> }
        </div>
        <Stamp />
      </div>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  win: state.game.win,
  number: state.game.number,
  input: state.game.input,
  guesses: state.game.guesses,
  scores: state.scores
});


//--------------------------| Export

export default connect(mapStateToProps)(hot(module)(App));
