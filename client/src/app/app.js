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

// Molecules
//

// Organisms
import Header from './components/organisms/header';
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
                <Input />
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
