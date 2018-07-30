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
