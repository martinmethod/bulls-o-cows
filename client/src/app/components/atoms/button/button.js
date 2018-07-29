//====================================================|
// BUTTON


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './button.scss';


//--------------------------| Component

const Button = props => (
  <button
    className='pa-button'
    onClick={props.onClick}
  >
    {props.children}
  </button>
);


//--------------------------| Export

export default Button;
