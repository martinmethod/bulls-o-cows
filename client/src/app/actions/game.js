//====================================================|
// ACTIONS: GAME


//--------------------------| New game

export const newGame = () => ({
  type: 'NEW_GAME'
});


//--------------------------| Update input

export const updateInput = value => ({
  type: 'UPDATE_INPUT',
  value
});


//--------------------------| Validate input

export const validateInput = message => ({
  type: 'VALIDATE_INPUT',
  message
});


//--------------------------| Add guess

export const addGuess = guess => ({
  type: 'ADD_GUESS',
  guess
});


//--------------------------| Win game

export const winGame = () => ({
  type: 'WIN_GAME'
});
