//====================================================|
// ACTIONS: SCORES


//--------------------------| Import

import scoresHandler from '../services/scores-handler';


//--------------------------| Definitions

const durationMeasure = 'seconds';


//--------------------------| Update scores

export default ({ guesses, startedAt, endedAt }, scores) => ({
  type: 'UPDATE_SCORES',
  scores: {
    byGuesses: scoresHandler(scores.byGuesses, {
      result: guesses.length,
      date: endedAt
    }),
    byTime: scoresHandler(scores.byTime, {
      //moment.duration(byTime.result, durationMeasure).humanize(),
      result: endedAt.diff(startedAt, durationMeasure),
      date: endedAt
    })
  }
});
