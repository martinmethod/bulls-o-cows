//====================================================|
// ACTIONS: GAME


//--------------------------| Start game

export const startGame = prop => ({
  type: 'START_GAME',
  prop
});


//--------------------------| End game

export const endGame = prop => ({
  type: 'END_GAME',
  prop
});
