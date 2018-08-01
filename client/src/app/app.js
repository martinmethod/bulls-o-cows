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

// Icons
import enter from '../assets/icons/enter.svg';

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
  componentWillMount() {
    if (!this.props.number) {
      this.props.dispatch(newGame());
    }
  }

  render() {
    return (
      <div id='app' data-status={this.props.win ? 'win' : ''}>
        <div>
          <Header />
          {
            this.props.number && (
              <main>
                <div className='body'>
                  <div className='new'>
                    <Button
                      onClick={() => {
                        this.props.dispatch(newGame());
                      }}
                    >
                      { systemDatabase.labels.buttons.newgame }
                    </Button>
                  </div>

                  <form>
                    <Input />
                    {
                      this.props.input.validateMessage !== '' && <ValidationNote>{this.props.input.validateMessage}</ValidationNote>
                    }
                    {
                      this.props.input.value.length === 4 && !this.props.win && (
                        <picture
                          dangerouslySetInnerHTML={{ __html: enter }}
                          onClick={() => {
                            if (this.props.guesses.find(g => g.guess === this.props.input.value)) {
                              this.props.dispatch(validateInput(checked));
                            }
                            else {
                              this.props.dispatch(addGuess(this.props.input.value));
                            }
                          }}
                        />
                      )
                    }
                  </form>

                  <div className='playground'>
                    {
                      this.props.win && <Message>{systemDatabase.labels.messages.win}</Message>
                    }

                    <Guesses />
                  </div>
                </div>
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
  win: state.game.win,
  number: state.game.number,
  input: state.game.input,
  guesses: state.game.guesses,
  scores: state.scores
});


//--------------------------| Export

export default connect(mapStateToProps)(hot(module)(App));
