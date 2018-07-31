//====================================================|
// RESULT


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './result.scss';

// Atoms
import ResultItem from '../../atoms/result-item';


//--------------------------| Component

const Result = ({ result }) => (
  <div className='pm-result'>
    {
      result !== '' && (
        <ResultItem
          role='bull'
          value={result.bulls}
        />
      )
    }
    {
      result !== '' && (
        <ResultItem
          role='cow'
          value={result.cows}
        />
      )
    }
  </div>
);


//--------------------------| Export

export default Result;
