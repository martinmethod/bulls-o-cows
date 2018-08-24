//====================================================|
// SCORES


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Styles
import styles from './scores.scss';

// Database
import systemDatabase from '../../../../database/system.json';

// Atoms
import Hyperlink from '../../atoms/hyperlink';


//--------------------------| Component

class Scores extends React.PureComponent {
  state = {
    opened: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      opened: !prevState.opened
    }));
  };

  render() {
    const { scores } = this.props;
    const toggleClass = this.state.opened ? styles.opened : '';

    return (
      <div className={styles.root}>
        <Hyperlink handleClick={this.handleClick}>
          {systemDatabase.labels.links.shots}
        </Hyperlink>
        <div className={`${styles.results} ${toggleClass}`}>
          {
           <p>Best time: {moment.duration(scores.byTime.result, 'seconds').humanize()}</p>
          }
          {
            <p>Best guesses: {scores.byGuesses.result}</p>
          }
          <Hyperlink handleClick={this.handleClick}>
            {systemDatabase.labels.buttons.close}
          </Hyperlink>
        </div>
      </div>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  scores: state.scores
});


//--------------------------| Export

export default connect(mapStateToProps)(Scores);
