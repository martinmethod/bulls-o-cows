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
import { startGame, endGame } from './actions/game';

// Atoms
import Button from './components/atoms/button';
import Stamp from './components/atoms/stamp';

// Molecules
//

// Organisms
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';


//--------------------------| Component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  startGame() {
    console.log('Start game.', this);
    this.props.dispatch(startGame());
  }

  endGame() {
    console.log('End game.', this);
    this.props.dispatch(endGame());
  }

  render() {
    return (
      <div id='app'>
        <div>
          <Header />
          <main>
            <Button
              onClick={
                !this.props.game.active ?
                  this.startGame :
                  this.endGame
              }
            >
              { !this.props.game.active ?
                systemDatabase.labels.buttons.newgame :
                systemDatabase.labels.buttons.reset
              }
            </Button>
          </main>
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
