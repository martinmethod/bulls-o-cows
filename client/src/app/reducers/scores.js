//====================================================|
// REDUCERS: SCORES


//--------------------------| Import

// import


//--------------------------| Default state

const localState = JSON.parse(localStorage.getItem('state'));
const scoresReducerDefaultState = localState && localState.scores ? localState.scores : {};


//--------------------------| Export

export default (state = scoresReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case 'UPDATE_SCORES':
      return {
        ...state,
        ...action.scores
      };
  }
};
