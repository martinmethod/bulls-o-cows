//====================================================|
// GUESS HANDLER


//--------------------------| Export

export default (number, guess) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < guess.length; i += 1) {
    if (number.indexOf(guess[i]) !== -1) {
      if (number.indexOf(guess[i]) === i) {
        bulls += 1;
      }
      else {
        cows += 1;
      }
    }
  }

  return {
    guess,
    result: { bulls, cows }
  };
};
