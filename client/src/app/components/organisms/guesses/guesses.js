//====================================================|
// GUESSES


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './guesses.scss';

// Database
import { labels } from '../../../../database/system.json';

// Molecules
import GuessLine from '../../molecules/guess-line';


//--------------------------| Component

const Guesses = props => (
  <div className='po-guesses'>
    <header>
      <span>{labels.guesses.try}</span>
      <span>{labels.guesses.guess}</span>
      <span>{labels.guesses.result}</span>
    </header>

    <GuessLine
      num={1}
      number={1234}
      result={{ bulls: 0, cows: 1 }}
    />
    <GuessLine
      num={2}
      number={5678}
      result={{ bulls: 1, cows: 1 }}
    />
    <GuessLine
      num={3}
      number={7890}
      result={{ bulls: 0, cows: 2 }}
    />
    <GuessLine
      num={4}
      number={2579}
      result={{ bulls: 1, cows: 0 }}
    />
    <GuessLine
      num={5}
      number={6308}
      result={{ bulls: 0, cows: 1 }}
    />
    <GuessLine
      num={6}
      number={4075}
      result={{ bulls: 4, cows: 0 }}
    />
  </div>
);


//--------------------------| Export

export default Guesses;
