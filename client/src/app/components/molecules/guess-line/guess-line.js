//====================================================|
// GUESS LINE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './guess-line.scss';

// Atoms
import Num from '../../atoms/num';
import Guess from '../../atoms/guess';

// Molecules
import Result from '../result';


//--------------------------| Component

const GuessLine = ({
  current,
  num,
  number,
  result,
  className
}) => (
  <div className={`${styles.root} ${className}`} data-current={current}>
    <Num className={styles.num}>{num}</Num>
    <Guess className={styles.guess}>{number}</Guess>
    <Result className={styles.result} result={result} />
  </div>
);


//--------------------------| Export

export default GuessLine;
