//====================================================|
// SCORES HANDLER


//--------------------------| Export

export default (prev, curr) => {
  if (!prev || (prev && curr.result <= prev.result)) {
    return curr;
  }

  return prev;
};
