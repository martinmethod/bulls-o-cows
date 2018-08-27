//====================================================|
// REDUCERS: GAME


//--------------------------| Default state

const initialState = {
  state: null,
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
        number: action.number,
        state: 'play',
        startedAt: action.startedAt
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
      return {
        ...state,
        input: {
          value: action.guess.result.bulls === 4 ? state.input.value : '',
          validateMessage: ''
        },
        guesses: [
          ...state.guesses,
          action.guess
        ]
      };

    case 'WIN_GAME':
      return {
        ...state,
        state: 'win',
        endedAt: action.endedAt
      };
  }
};
