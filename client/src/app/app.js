//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader';

// Libraries
import React from 'react';

// Styles
import './app.scss';

// Atoms
import Stamp from './components/atoms/stamp';

// Molecules
//

// Organisms
import Header from './components/organisms/header';


//--------------------------| Component

const App = () => (
  <div id='app'>
    <main>
      <Header />
    </main>
    <Stamp />
  </div>
);


//--------------------------| Export

export default hot(module)(App);
