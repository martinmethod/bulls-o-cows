//====================================================|
// GUESSES


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import CustomScroll from 'react-custom-scroll';

// Styles
import 'react-custom-scroll/dist/customScroll.css';
import '../../../../styles/external/custom-scrollbar.scss';
import styles from './guesses.scss';

// Database
import { labels } from '../../../../database/system.json';

// Atoms
import Message from '../../atoms/message';

// Molecules
import GuessLine from '../../molecules/guess-line';


//--------------------------| Component

const Guesses = ({
  win,
  guesses,
  input,
  className
}) => (
  <div className={`${styles.root} ${className}`}>
    <header className={styles.head} data-visible={guesses.length !== 0 || input.value !== ''}>
      <span>{labels.guesses.try}</span>
      <span>{labels.guesses.guess}</span>
      <span>{labels.guesses.result}</span>
    </header>

    <div style={{ flex: 1, minHeight: 0, minWidth: 0 }}>
      <CustomScroll heightRelativeToParent='100%'>
        <div className={styles.wrapper}>
          {
            guesses.length === 0 && input.value === '' && (
              <Message>{labels.messages.noGuesses}</Message>
            )
          }

          {
            (guesses.length !== 0 || input.value !== '') && (
              <div className={styles.list}>
                {
                  guesses.map(({ guess, result }, i) => (
                    <GuessLine
                      key={i}
                      num={(`0${(i + 1)}`).slice(-2)}
                      number={guess}
                      className={styles.guessLine}
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
                      className={styles.guessLine}
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
      </CustomScroll>
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
