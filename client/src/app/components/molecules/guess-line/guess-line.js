//====================================================|
// GUESS LINE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './guess-line.scss';

// Atoms
import Num from '../../atoms/num';
import Guess from '../../atoms/guess';

// Molecules
import Result from '../../molecules/result';


//--------------------------| Component

const GuessLine = ({ num, number, result }) => (
  <div className='pm-guess-line'>
    <Num>{num}</Num>
    <Guess>{number}</Guess>
    {result && <Result result={result} />}
  </div>
);


//--------------------------| Export

export default GuessLine;
