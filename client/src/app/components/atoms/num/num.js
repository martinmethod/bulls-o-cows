//====================================================|
// NUM


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './num.scss';


//--------------------------| Component

const Num = ({ children }) => (
  <span className='pa-num'>
    {children}
  </span>
);


//--------------------------| Export

export default Num;
