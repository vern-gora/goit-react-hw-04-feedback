import React from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positive = (good / total) * 100;
    return Math.round(positive) || 0;
  }

  render() {
    const keys = Object.keys(this.state);
    return (
      <div>
        <Section title={'Please, leave feedback'}>
          <Feedback options={keys} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={'Statistics'}>
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              onGood={this.state.good}
              onNeutral={this.state.neutral}
              onBad={this.state.bad}
              onTotal={this.countTotalFeedback()}
              onPositive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
