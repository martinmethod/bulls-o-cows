//====================================================|
// REDUCERS: GAME


//--------------------------| Import

import numberGenerator from '../helpers/number-generator';
import guessChecker from '../helpers/guess-checker';


//--------------------------| Default state

const initialState = {
  win: null,
  number: null,
  input: {
    value: '',
    validateMessage: ''
  },
  guesses: []
};

const localState = JSON.parse(localStorage.getItem('state'));
const gameReducerDefaultState = localState && localState.game ? localState.game : initialState;


//--------------------------| Export

export default (state = gameReducerDefaultState, action) => {
  let result = null;

  switch (action.type) {
    default:
      return state;

    case 'NEW_GAME':
      return {
        ...initialState,
        number: numberGenerator()
      };

    case 'UPDATE_INPUT':
      return {
        ...state,
        input: {
          ...state.input,
          value: action.value
        }
      };

    case 'VALIDATE_INPUT':
      return {
        ...state,
        input: {
          ...state.input,
          validateMessage: action.message
        }
      };

    case 'ADD_GUESS':
      result = guessChecker(state.number, action.guess);

      return {
        ...state,
        win: result.bulls === 4,
        input: {
          value: result.bulls === 4 ? state.input.value : '',
          validateMessage: ''
        },
        guesses: [
          ...state.guesses,
          {
            guess: action.guess,
            result
          }
        ]
      };
  }
};
