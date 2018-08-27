//====================================================|
// SCORES


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import humanizeDuration from 'humanize-duration';

// Styles
import styles from './scores.scss';

// Icons
import ScoreSVG from '../../../../assets/icons/score.svg';

// Database
import { labels } from '../../../../database/system.json';

// Atoms
import Score from '../../atoms/score';
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
          {labels.links.shots}
        </Hyperlink>
        <div className={`${styles.results} ${toggleClass}`}>
          <picture className={styles.icon}>
            <ScoreSVG />
          </picture>

          <div>
            {
              <Score
                className={styles.score}
                label={labels.scores.guesses}
                value={`Just ${scores.byGuesses.result} ${scores.byGuesses.result > 1 ? 'guesses' : 'guess'}`}
                date={moment(scores.byGuesses.date).calendar()}
              />
            }
            {
              <Score
                className={styles.score}
                label={labels.scores.time}
                value={humanizeDuration(moment.duration(scores.byTime.result, 'milliseconds'), { round: true })}
                date={moment(scores.byTime.date).calendar()}
              />
            }
          </div>

          <Hyperlink handleClick={this.handleClick}>
            {labels.buttons.back}
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
