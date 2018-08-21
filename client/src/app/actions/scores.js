//====================================================|
// ACTIONS: SCORES


//--------------------------| Update scores by time

export const updateScoresByTime = scores => ({
  type: 'UPDATE_SCORES_BY_TIME',
  scores
});


//--------------------------| Update scores by guesses

export const updateScoresByGuesses = scores => ({
  type: 'UPDATE_SCORES_BY_GUESSES',
  scores
});
