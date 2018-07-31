//====================================================|
// GUESSES


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import './guesses.scss';

// Database
import { labels } from '../../../../database/system.json';

// Molecules
import GuessLine from '../../molecules/guess-line';


//--------------------------| Component

const Guesses = ({ guesses, input }) => (
  <div className='po-guesses'>
    <header>
      <span>{labels.guesses.try}</span>
      <span>{labels.guesses.guess}</span>
      <span>{labels.guesses.result}</span>
    </header>

    <div className='list'>
      {
        guesses.map(({ guess, result }, i) => (
          <GuessLine
            key={i}
            num={(`0${(i + 1)}`).slice(-2)}
            number={guess}
            result={{
              bulls: result.bulls,
              cows: result.cows
            }}
          />
        ))
      }

      {
        input.value !== '' && (
          <GuessLine
            num={(`0${(guesses.length + 1)}`).slice(-2)}
            number={input.value}
            result={''}
          />
        )
      }
    </div>
  </div>
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  input: state.game.input,
  guesses: state.game.guesses
});


//--------------------------| Export

export default connect(mapStateToProps)(Guesses);
