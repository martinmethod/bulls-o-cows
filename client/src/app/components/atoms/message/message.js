//====================================================|
// MESSAGE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './message.scss';


//--------------------------| Component

const Message = props => (
  <div className='pa-message'>
    <p>
      { props.children }
    </p>
  </div>
);


//--------------------------| Export

export default Message;
