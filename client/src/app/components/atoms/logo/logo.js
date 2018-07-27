//====================================================|
// LOGO


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './logo.scss';

// Icons
import logo from '../../../../assets/icons/logo.svg';


//--------------------------| Component

const Logo = props => (
  <picture className='pa-logo' dangerouslySetInnerHTML={{ __html: logo }} />
);


//--------------------------| Export

export default Logo;
