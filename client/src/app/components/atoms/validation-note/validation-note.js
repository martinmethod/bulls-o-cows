//====================================================|
// VALIDATION NOTE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './validation-note.scss';


//--------------------------| Component

const ValidationNote = props => (
  <p className='pa-validation-note'>
    {props.children}
  </p>
);


//--------------------------| Export

export default ValidationNote;
