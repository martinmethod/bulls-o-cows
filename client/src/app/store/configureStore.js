//====================================================|
// CONFIGURE STORE


//--------------------------| Import

// Redux
import { createStore, combineReducers } from 'redux';

// Reducers
import gameReducer from '../reducers/game';
import scoresReducer from '../reducers/scores';


//--------------------------| Export

export default () => createStore(
  combineReducers({
    game: gameReducer,
    scores: scoresReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);
