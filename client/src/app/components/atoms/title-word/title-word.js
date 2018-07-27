//====================================================|
// TITLE WORD


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './title-word.scss';


//--------------------------| Component

const TitleWord = props => (
  <span className='pa-title-word'>
    {props.children}
  </span>
);


//--------------------------| Export

export default TitleWord;
