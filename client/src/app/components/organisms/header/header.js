//====================================================|
// HEADER


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './header.scss';

// Molecules
import Title from '../../molecules/title';


//--------------------------| Component

const Header = props => (
  <header className='po-header'>
    <Title />
  </header>
);


//--------------------------| Export

export default Header;
