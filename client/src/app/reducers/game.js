//====================================================|
// REDUCERS: GAME


//--------------------------| Import

// import


//--------------------------| Default state

const localState = JSON.parse(localStorage.getItem('state'));
const gameReducerDefaultState = localState && localState.game ? localState.game : {};


//--------------------------| Export

export default (state = gameReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;

    case '':
      return state;
  }
};
