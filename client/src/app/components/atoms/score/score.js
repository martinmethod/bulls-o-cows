//====================================================|
// SCORE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './score.scss';


//--------------------------| Component

const Score = ({
  label,
  value,
  date,
  className
}) => (
  <div className={`${styles.root} ${className}`}>
    <label className={styles.label}>{label}</label>
    <span className={styles.value}>{value}</span>
    <span className={styles.date}>{date}</span>
  </div>
);


//--------------------------| Export

export default Score;
