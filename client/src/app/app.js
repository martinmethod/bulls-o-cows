//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader';

// Libraries
import React from 'react';

// Styles
import './app.scss';

// Organisms
//

// Molecules
//

// Atoms
import Stamp from './components/atoms/stamp';


//--------------------------| Component

const App = () => (
  <div id='app'>
    <div className='content' />
    <Stamp />
  </div>
);


//--------------------------| Export

export default hot(module)(App);
