//====================================================|
// RESULT ITEM


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './result-item.scss';

// Icons
import bull from '../../../../assets/icons/bull.svg';
import cow from '../../../../assets/icons/cow.svg';


//--------------------------| Component

const ResultItem = ({ role, value }) => {
  const icon = role === 'bull' ? bull : cow;

  return (
    <div className='pa-result-item' data-role={role} data-value={value}>
      <i dangerouslySetInnerHTML={{ __html: icon }} />
      <span>{value}</span>
    </div>
  );
};


//--------------------------| Export

export default ResultItem;
