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
import { newGame } from './actions/game';

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
    if (!this.props.game.number) {
      this.props.dispatch(newGame());
    }
  }

  render() {
    return (
      <div id='app'>
        <div>
          <Header />
          {
            this.props.game.number && (
              <main>
                <form
                  onSubmit={(e) => {
                    console.log(e);
                    e.preventDefault();
                  }}
                >
                  <Input />
                  {
                    this.props.game.input.validateMessage !== '' && <ValidationNote>{this.props.game.input.validateMessage}</ValidationNote>
                  }
                </form>

                {
                  this.props.game.guesses.length !== 0 && (
                    <Guesses />
                  )
                }

                {
                  this.props.game.guesses.length === 0 && (
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
          <Footer />
        </div>
        <Stamp />
      </div>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => state;


//--------------------------| Export

export default connect(mapStateToProps)(hot(module)(App));
