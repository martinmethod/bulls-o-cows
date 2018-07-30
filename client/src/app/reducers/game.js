//====================================================|
// REDUCERS: GAME


//--------------------------| Import

import numberGenerator from '../helpers/number-generator';


//--------------------------| Default state

const initialState = {
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
  }
};
