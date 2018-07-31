//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader';

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import './app.scss';

// Database
import systemDatabase from '../database/system.json';

// Actions
import { newGame, addGuess } from './actions/game';

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


//--------------------------| Component

class App extends React.Component {
  componentWillMount() {
    if (!this.props.number) {
      this.props.dispatch(newGame());
      this.props.dispatch(addGuess('1234'));
      this.props.dispatch(addGuess('5678'));
      this.props.dispatch(addGuess('7890'));
      this.props.dispatch(addGuess('2579'));
      this.props.dispatch(addGuess('6308'));
      this.props.dispatch(addGuess('4075'));
    }
  }

  render() {
    return (
      <div id='app'>
        <div>
          <Header />
          {
            this.props.number && (
              <main>
                <form
                  onSubmit={(e) => {
                    console.log(e);
                    e.preventDefault();
                  }}
                >
                  <Input />
                  {
                    this.props.input.validateMessage !== '' && <ValidationNote>{this.props.input.validateMessage}</ValidationNote>
                  }
                </form>

                {
                  (this.props.guesses.length !== 0 || this.props.input.value !== '') && (
                    <Guesses />
                  )
                }

                {
                  this.props.guesses.length === 0 && this.props.input.value === '' && (
                    <Message>No guesses yet</Message>
                  )
                }

                <Button
                  onClick={() => {
                    this.props.dispatch(newGame());
                  }}
                >
                  { systemDatabase.labels.buttons.newgame }
                </Button>
              </main>
            )
          }
          { this.props.scores.length !== 0 && <Footer /> }
        </div>
        <Stamp />
      </div>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  number: state.game.number,
  input: state.game.input,
  guesses: state.game.guesses,
  scores: state.scores
});


//--------------------------| Export

export default connect(mapStateToProps)(hot(module)(App));
