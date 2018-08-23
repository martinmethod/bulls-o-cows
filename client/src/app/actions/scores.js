//====================================================|
// ACTIONS: SCORES


//--------------------------| Update scores

export const updateScores = scores => ({
  type: 'UPDATE_SCORES',
  scores
});


export const setScores = scores => ({
  type: 'SET_SCORES',
  scores
});
