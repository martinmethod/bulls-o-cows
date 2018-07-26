//====================================================|
// STAMP


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './stamp.scss';

// Icons
import logo from '../../../../assets/icons/logo.svg';


//--------------------------| Component

const Stamp = props => (
  <picture className='pa-stamp' dangerouslySetInnerHTML={{ __html: logo }} />
);


//--------------------------| Export

export default Stamp;
