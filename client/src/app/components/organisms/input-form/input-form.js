//====================================================|
// INPUT FORM


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Styles
import styles from './input-form.scss';

// Icons
import EnterSVG from '../../../../assets/icons/enter.svg';

// Database
import { labels } from '../../../../database/system.json';

// Services
import guessHandler from '../../../services/guess-handler';

// Actions
import { addGuess, validateInput, winGame } from '../../../actions/game';

// Atoms
import Input from '../../atoms/input';
import ValidationNote from '../../atoms/validation-note';


//--------------------------| Definitions

const { checked: checkedLabel } = labels.validation;


//--------------------------| Component

class InputForm extends React.PureComponent {
  submitGuess = () => {
    const {
      number,
      input,
      guesses,
      dispatch
    } = this.props;

    if (guesses.find(g => g.guess === input.value)) {
      dispatch(validateInput(checkedLabel));
    }
    else {
      const guess = guessHandler(number, input.value);
      dispatch(addGuess(guess));

      if (guess.result.bulls === 4) {
        dispatch(winGame());
      }
    }
  };

  render() {
    const { input, gameState, className } = this.props;

    return (
      <form className={`${styles.root} ${className}`}>
        <Input submitGuess={this.submitGuess} />
        {
          input.validateMessage !== '' && <ValidationNote>{input.validateMessage}</ValidationNote>
        }
        {
          input.value.length === 4 && gameState !== 'win' && (
            <picture
              className={styles.enter}
              onClick={this.submitGuess}
            >
              <EnterSVG />
            </picture>
          )
        }
      </form>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  number: state.game.number,
  input: state.game.input,
  guesses: state.game.guesses,
  gameState: state.game.state
});


//--------------------------| Export

export default connect(mapStateToProps)(InputForm);
