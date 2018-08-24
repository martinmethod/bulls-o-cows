//====================================================|
// ACTIONS: SCORES


//--------------------------| Import

import scoresHandler from '../services/scores-handler';


//--------------------------| Update scores

export default ({ guesses, startedAt, endedAt }, scores) => ({
  type: 'UPDATE_SCORES',
  scores: {
    byGuesses: scoresHandler(scores.byGuesses, {
      result: guesses.length,
      date: endedAt
    }),
    byTime: scoresHandler(scores.byTime, {
      result: endedAt.diff(startedAt, 'seconds'),
      date: endedAt
    })
  }
});
