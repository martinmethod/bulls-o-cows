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
import { updateInput } from '../../../actions/game';


//--------------------------| Component

class Input extends React.Component {
  onNumberChange = (e) => {
    const number = e.target.value;
    const firstLetter = e.target.value.charAt(0);
    const currentLetter = e.target.value.charAt(e.target.value.length - 1);
    const forbiddenSymbols = ['e', '.'].concat(this.props.inputValue.split(''));
    const prevNum = this.props.inputValue.split('');

    // remove forbidden symbol on deletion
    if (e.target.value.length < this.props.inputValue.length) {
      for (let i = 0; i < e.target.value.length; i += 1) {
        const index = prevNum.indexOf(e.target.value[i]);
        if (index > -1) {
          prevNum.splice(index, 1);
        }
      }

      const prevNumIndex = forbiddenSymbols.indexOf(prevNum[0]);
      if (prevNumIndex > -1) {
        forbiddenSymbols.splice(prevNumIndex, 1);
      }
      const currentLetterIndex = forbiddenSymbols.indexOf(currentLetter);
      if (currentLetterIndex > -1) {
        forbiddenSymbols.splice(currentLetterIndex, 1);
      }
    }

    if (
      e.target.value.length <= 4 &&
      (!firstLetter.match('0')) &&
      (currentLetter.match(/^\d*$/)) &&
      forbiddenSymbols.indexOf(currentLetter) === -1
    ) {
      this.props.dispatch(updateInput(number));
    }
    else if (firstLetter.match('0')) {
      console.log(systemDatabase.labels.validation.no_zero_first);
    }
    else if (forbiddenSymbols.indexOf(currentLetter) !== -1) {
      console.log(systemDatabase.labels.validation.used_digit);
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
        onChange={this.onNumberChange}
        onKeyPress={(e) => { // Safari fix
          if ('1234567890'.indexOf(e.key) === -1) {
            console.log(systemDatabase.labels.validation.only_digits);
            e.preventDefault();
          }
        }}
      />
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  inputValue: state.game.inputValue
});


//--------------------------| Export

export default connect(mapStateToProps)(Input);
