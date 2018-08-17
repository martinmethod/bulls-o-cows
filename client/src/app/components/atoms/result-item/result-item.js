//====================================================|
// RESULT ITEM


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './result-item.scss';

// Icons
import bull from '../../../../assets/icons/bull.svg';
import cow from '../../../../assets/icons/cow.svg';


//--------------------------| Component

const ResultItem = ({ role, value, className }) => {
  const icon = role === 'bull' ? bull : cow;

  return (
    <div className={`${styles.root} ${className}`} data-role={role} data-value={value}>
      <i className={styles.icon} dangerouslySetInnerHTML={{ __html: icon }} />
      <span className={styles.value}>{value}</span>
    </div>
  );
};


//--------------------------| Export

export default ResultItem;
