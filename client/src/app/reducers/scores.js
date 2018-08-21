//====================================================|
// REDUCERS: SCORES


//--------------------------| Import

// import


//--------------------------| Default state

const localState = JSON.parse(localStorage.getItem('state'));
const scoresReducerDefaultState = localState && localState.scores ? localState.scores : {
  byGuesses: [],
  byTime: []
};


//--------------------------| Export

export default (state = scoresReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'UPDATE_SCORES_BY_TIME':
      return {
        ...state,
        byTime: action.scores
      };

    case 'UPDATE_SCORES_BY_GUESSES':
      return {
        ...state,
        byGuesses: action.scores
      };
  }
};
