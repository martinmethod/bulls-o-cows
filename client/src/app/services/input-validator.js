//====================================================|
// INPUT VALIDATOR


//--------------------------| Import

import systemDatabase from '../../database/system.json';


//--------------------------| Definitions

const {
  noZeroFirst,
  usedDigit,
  onlyFourDigits,
  onlyDigits
} = systemDatabase.labels.validation;


//--------------------------| Export

export default (value, prevNum) => {
  const firstChar = value.charAt(0);
  const currentChar = value.charAt(value.length - 1);

  // more than four digits
  if (value.length > 4) {
    return {
      error: onlyFourDigits
    };
  }

  // current character is not digit
  if (!currentChar.match(/^\d*$/)) {
    return {
      error: onlyDigits
    };
  }

  // first digit is 0
  if (firstChar.match('0')) {
    return {
      error: noZeroFirst
    };
  }

  // current digit is already used
  if (prevNum.indexOf(currentChar) !== -1) {
    return {
      error: usedDigit
    };
  }

  // all good
  return {};
};
