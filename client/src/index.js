//====================================================|
// BULLS`O`COWS


//--------------------------| Import

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Styles
import 'normalize.css/normalize.css';
import './app/styles/scaffolding.scss';

// Store
import configureStore from './app/store/configureStore';

// Images
import './images/logo.png';
import './images/app.png';

// App
import App from './app';


//--------------------------| Body

const root = document.createElement('div');

root.id = 'root';

document.body.appendChild(root);


//--------------------------| State store

const stateStore = configureStore();

stateStore.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(stateStore.getState()));
});


//--------------------------| Render

const jsx = (
  <Provider store={ stateStore }>
    <App />
  </Provider>
);

ReactDOM.render(jsx, root);
