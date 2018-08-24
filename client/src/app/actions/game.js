//====================================================|
// ACTIONS: GAME


//--------------------------| Import

// Libraries
import moment from 'moment';

// Store
import stateStore from '../store/getStore';

// Services
import numberGenerator from '../services/number-generator';

// Actions
import updateScores from './scores';


//--------------------------| New game

export const newGame = () => ({
  type: 'NEW_GAME',
  number: numberGenerator(),
  startedAt: moment()
});


//--------------------------| Update input

export const updateInput = value => ({
  type: 'UPDATE_INPUT',
  value
});


//--------------------------| Validate input

export const validateInput = message => ({
  type: 'VALIDATE_INPUT',
  message
});


//--------------------------| Add guess

export const addGuess = guess => ({
  type: 'ADD_GUESS',
  guess
});


//--------------------------| Win game

export const winGame = () => {
  const endedAt = moment();
  const { game, scores } = stateStore.getState();
  console.log('winGame', game, scores);

  stateStore.dispatch(updateScores({ ...game, endedAt }, scores));

  return {
    type: 'WIN_GAME',
    endedAt
  };
};
