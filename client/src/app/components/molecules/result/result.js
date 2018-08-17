//====================================================|
// RESULT


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './result.scss';

// Atoms
import ResultItem from '../../atoms/result-item';


//--------------------------| Component

const Result = ({ result, className }) => (
  <div className={`${styles.root} ${className}`}>
    {
      result !== '' && (
        <ResultItem
          role='bull'
          value={result.bulls}
          className={styles.resultItem}
        />
      )
    }
    {
      result !== '' && (
        <ResultItem
          role='cow'
          value={result.cows}
          className={styles.resultItem}
        />
      )
    }
  </div>
);


//--------------------------| Export

export default Result;
