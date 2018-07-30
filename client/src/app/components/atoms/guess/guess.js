//====================================================|
// GUESS


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './guess.scss';


//--------------------------| Component

const Guess = ({ children }) => (
  <span className='pa-guess'>
    {children}
  </span>
);


//--------------------------| Export

export default Guess;
