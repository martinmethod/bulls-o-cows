//====================================================|
// SCORES HANDLER


//--------------------------| Import

import moment from 'moment';


//--------------------------| Definitions

const durationMeasure = 'seconds';


//--------------------------| Export

export default ({ startedAt, endedAt, guesses }, { byGuesses, byTime }) => {
  const duration = moment.duration(endedAt.diff(startedAt, durationMeasure), durationMeasure);
  const tries = guesses.length;

  console.log(`Duration: ${duration.humanize()} | Tries: ${tries}`);
  console.log(`Scores by guesses: ${byGuesses}`);
  console.log(`Scores by time: ${byTime}`);

  return {};
};
