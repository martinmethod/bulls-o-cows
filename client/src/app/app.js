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
import Button from './components/atoms/button';
import Stamp from './components/atoms/stamp';

// Molecules
//

// Organisms
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';

//--------------------------| Component

const App = () => (
  <div id='app'>
    <main>
      <Header />
      <section>
        <Button>New game</Button>
      </section>
      <Footer />
    </main>
    <Stamp />
  </div>
);


//--------------------------| Export

export default hot(module)(App);
