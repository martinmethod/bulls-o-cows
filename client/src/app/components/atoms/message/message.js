//====================================================|
// MESSAGE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './message.scss';


//--------------------------| Component

const Message = props => (
  <p className='pa-message'>
    { props.children }
  </p>
);


//--------------------------| Export

export default Message;
