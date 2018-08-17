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
  const Icon = { bull, cow }[role];

  return (
    <div className={`${styles.root} ${className}`} data-role={role} data-value={value}>
      <i className={styles.icon}><Icon /></i>
      <span className={styles.value}>{value}</span>
    </div>
  );
};


//--------------------------| Export

export default ResultItem;
