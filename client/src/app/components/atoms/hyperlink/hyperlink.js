//====================================================|
// HYPERLINK


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './hyperlink.scss';


//--------------------------| Component

const Hyperlink = props => (
  <a className='pa-hyperlink'>
    {props.children}
  </a>
);


//--------------------------| Export

export default Hyperlink;
