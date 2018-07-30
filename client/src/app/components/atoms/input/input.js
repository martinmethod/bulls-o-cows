//====================================================|
// INPUT


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import './input.scss';

// Database
import systemDatabase from '../../../../database/system.json';

// Actions
import { validateInput, updateInput } from '../../../actions/game';


//--------------------------| Definitions

const { noZeroFirst, usedDigit, onlyDigits } = systemDatabase.labels.validation;


//--------------------------| Component

class Input extends React.Component {
  onValueChange = (e) => {
    const { value } = e.target;
    const firstChar = value.charAt(0);
    const currentChar = value.charAt(value.length - 1);
    const prevNum = this.props.inputValue.split('');
    const forbiddenSymbols = ['e', '.'].concat(prevNum);

    // remove forbidden symbol on deletion
    if (value.length < prevNum.length) {
      for (let i = 0; i < value.length; i += 1) {
        const index = prevNum.indexOf(value[i]);
        if (index > -1) {
          prevNum.splice(index, 1);
        }
      }

      const prevNumIndex = forbiddenSymbols.indexOf(prevNum[0]);
      if (prevNumIndex > -1) {
        forbiddenSymbols.splice(prevNumIndex, 1);
      }
      const currentCharIndex = forbiddenSymbols.indexOf(currentChar);
      if (currentCharIndex > -1) {
        forbiddenSymbols.splice(currentCharIndex, 1);
      }
    }

    // less than or equal to 4 digits
    if (value.length <= 4) {
      // current character is not digit
      if (!currentChar.match(/^\d*$/)) {
        this.props.dispatch(validateInput(onlyDigits));
      }

      // first digit is 0
      else if (firstChar.match('0')) {
        this.props.dispatch(validateInput(noZeroFirst));
      }

      // current digit is already used
      else if (prevNum.indexOf(currentChar) !== -1) {
        this.props.dispatch(validateInput(usedDigit));
      }

      // all good
      else {
        this.props.dispatch(validateInput(''));
        this.props.dispatch(updateInput(value));
      }
    }
  };

  render() {
    return (
      <input
        autoFocus
        type='number'
        pattern='[0-9]*'
        placeholder='••••'
        value={this.props.inputValue}
        className='pa-input'
        onChange={this.onValueChange}
        onKeyPress={(e) => { // Fix for Safari that prevents writing non-digit characters
          if ('1234567890'.indexOf(e.key) === -1) {
            this.props.dispatch(validateInput(onlyDigits));
            e.preventDefault();
          }
        }}
      />
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  inputValue: state.game.input.value
});


//--------------------------| Export

export default connect(mapStateToProps)(Input);
