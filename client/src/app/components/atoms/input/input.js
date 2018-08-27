//====================================================|
// INPUT


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import styles from './input.scss';

// Database
import systemDatabase from '../../../../database/system.json';

// Services
import inputValidator from '../../../services/input-validator';

// Actions
import { validateInput, updateInput } from '../../../actions/game';


//--------------------------| Definitions

const { onlyDigits, allDigits } = systemDatabase.labels.validation;


//--------------------------| Component

class Input extends React.PureComponent {
  handleKeyPress = (e) => {
    const { submitGuess, inputValue, dispatch } = this.props;

    if ('1234567890'.indexOf(e.key) === -1) { // if not a digit
      if (inputValue.length < 4) {
        dispatch(validateInput(onlyDigits));
      }
      e.preventDefault();
    }

    if (e.key === 'Enter') {
      if (inputValue.length < 4) {
        dispatch(validateInput(allDigits));
      }
      else {
        submitGuess();
      }
    }
  };

  handleChange = (e) => {
    const { inputValue, dispatch } = this.props;
    const { value } = e.target;
    const prevNum = inputValue.split('');

    // remove forbidden symbol on deletion
    if (value.length < prevNum.length) {
      this.removeUsedSymbol(value, prevNum);
    }

    // validate
    const { error: validationError } = inputValidator(value, prevNum);
    dispatch(validateInput(validationError || ''));

    // update the input (if no validation errors)
    if (!validationError) {
      dispatch(updateInput(value));
    }
  };

  handleBlur = () => {
    const { inputValue, submitGuess } = this.props;

    if (inputValue.length === 4) {
      submitGuess();
    }
  };

  disableScrolling = (e) => {
    e.preventDefault();
  };

  setInputRef = (node) => {
    this.inputRef = node;
  };

  focusInput = () => {
    this.inputRef.focus();
  };

  removeUsedSymbol = (value, prevNum) => {
    const forbiddenSymbols = ['e', '.'].concat(prevNum);
    const currentChar = value.charAt(value.length - 1);

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
  };

  componentDidMount() {
    this.focusInput();
  }

  componentDidUpdate() {
    this.focusInput();
  }

  render() {
    const { inputValue, gameState } = this.props;

    return (
      <input
        autoFocus
        className={styles.root}
        type='number'
        pattern='[0-9]*'
        placeholder='••••'
        value={inputValue}
        disabled={gameState === 'win'}
        ref={this.setInputRef}
        onKeyPress={this.handleKeyPress} // Safari fix that prevents writing non-digit characters
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onWheel={this.disableScrolling} // Disable mouse scrolling
      />
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  gameState: state.game.state,
  inputValue: state.game.input.value
});


//--------------------------| Export

export default connect(mapStateToProps)(Input);
