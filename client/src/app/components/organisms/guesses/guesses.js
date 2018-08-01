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

// Atoms
import Message from '../../atoms/message';

// Molecules
import GuessLine from '../../molecules/guess-line';


//--------------------------| Component

const Guesses = ({ win, guesses, input }) => (
  <div className='po-guesses'>
    <header data-visible={guesses.length !== 0 || input.value !== ''}>
      <span>{labels.guesses.try}</span>
      <span>{labels.guesses.guess}</span>
      <span>{labels.guesses.result}</span>
    </header>

    <div className='wrapper'>
      {
        guesses.length === 0 && input.value === '' && (
          <Message>{labels.messages.noGuesses}</Message>
        )
      }

      {
        (guesses.length !== 0 || input.value !== '') && (
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
              input.value !== '' && !win && (
                <GuessLine
                  current={true}
                  num={(`0${(guesses.length + 1)}`).slice(-2)}
                  number={input.value}
                  result={{
                    bulls: '•',
                    cows: '•'
                  }}
                />
              )
            }
          </div>
        )
      }
    </div>
  </div>
);


//--------------------------| State to Props

const mapStateToProps = state => ({
  win: state.game.win,
  input: state.game.input,
  guesses: state.game.guesses
});


//--------------------------| Export

export default connect(mapStateToProps)(Guesses);
