//====================================================|
// BULLS`O`COWS


//--------------------------| Import

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Styles
import 'normalize.css/normalize.css';
import './styles/scaffoldings/base.scss';
import './styles/scaffoldings/typography.scss';

// Store
import stateStore from './app/store/getStore';

// Actions
import { newGame } from './app/actions/game';

// Images
import './assets/images/logo.png';
import './assets/images/app.png';

// App
import App from './app';


//--------------------------| Root

const root = document.createElement('div');

root.id = 'root';

document.body.appendChild(root);


//--------------------------| State store

stateStore.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(stateStore.getState()));
});


//--------------------------| Start a game (if no such)

if (!stateStore.getState().game.state) {
  stateStore.dispatch(newGame());
}


//--------------------------| Render

const jsx = (
  <Provider store={ stateStore }>
    <App />
  </Provider>
);

ReactDOM.render(jsx, root);
