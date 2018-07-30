//====================================================|
// NUMBER GENERATOR


export default () => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const ranNums = [];
  let i = nums.length;
  let num = 0;

  const getRandomNum = () => {
    num = Math.floor(Math.random() * (i + 1));
    if (i === 9 && num === 0) getRandomNum();
  };

  while (i--) { // eslint-disable-line no-plusplus
    getRandomNum();
    ranNums.push(nums[num]);
    nums.splice(num, 1);
  }

  return ranNums.splice(0, 4).join('');
};
