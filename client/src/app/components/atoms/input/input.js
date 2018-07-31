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
import { validateInput, updateInput, addGuess } from '../../../actions/game';


//--------------------------| Definitions

const {
  noZeroFirst,
  usedDigit,
  onlyDigits,
  allDigits,
  checked
} = systemDatabase.labels.validation;


//--------------------------| Component

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.setInputRef = this.setInputRef.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

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

  printGuess() {
    if (this.props.guesses.find(g => g.guess === this.props.inputValue)) {
      this.props.dispatch(validateInput(checked));
    }
    else {
      this.props.dispatch(addGuess(this.props.inputValue));
    }
  }

  focusInput() {
    this.inputRef.focus();
  }

  componentDidMount() {
    this.focusInput();
  }

  componentDidUpdate() {
    this.focusInput();
  }

  setInputRef(node) {
    this.inputRef = node;
  }

  render() {
    return (
      <input
        ref={this.setInputRef}
        autoFocus
        type='number'
        disabled={this.props.win}
        pattern='[0-9]*'
        placeholder='••••'
        value={this.props.inputValue}
        className='pa-input'
        onChange={this.onValueChange}
        onBlur={() => {
          if (this.props.inputValue.length === 4) {
            this.printGuess();
          }
        }}
        onKeyPress={(e) => { // Fix for Safari that prevents writing non-digit characters
          if ('1234567890'.indexOf(e.key) === -1) {
            if (this.props.inputValue.length < 4) {
              this.props.dispatch(validateInput(onlyDigits));

              if (e.key === 'Enter') {
                this.props.dispatch(validateInput(allDigits));
              }
            }
            else if (e.key === 'Enter') {
              this.printGuess();
            }
            e.preventDefault();
          }
        }}
      />
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  win: state.game.win,
  number: state.game.number,
  guesses: state.game.guesses,
  inputValue: state.game.input.value
});


//--------------------------| Export

export default connect(mapStateToProps)(Input);
