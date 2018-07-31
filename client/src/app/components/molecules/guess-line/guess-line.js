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

const GuessLine = props => (
  <div className='pm-guess-line' data-current={props.current}>
    <Num>{props.num}</Num>
    <Guess>{props.number}</Guess>
    <Result result={props.result} />
  </div>
);


//--------------------------| Export

export default GuessLine;
