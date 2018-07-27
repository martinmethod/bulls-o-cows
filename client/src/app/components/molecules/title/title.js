//====================================================|
// TITLE


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import './title.scss';

// Atoms
import TitleWord from '../../atoms/title-word';
import Logo from '../../atoms/logo';


//--------------------------| Component

const Title = props => (
  <div className='pm-title'>
    <TitleWord>Bulls</TitleWord>
    <Logo />
    <TitleWord>Cows</TitleWord>
  </div>
);


//--------------------------| Export

export default Title;
