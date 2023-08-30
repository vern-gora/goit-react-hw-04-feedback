import React, { useState } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const positive = (good / total) * 100;
    return Math.round(positive) || 0;
  };

  return (
    <div>
      <Section title={'Please, leave feedback'}>
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {good || neutral || bad ? (
          <Statistics
            onGood={good}
            onNeutral={neutral}
            onBad={bad}
            onTotal={countTotalFeedback()}
            onPositive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = state => {
//     this.setState(prevState => ({
//       [state]: prevState[state] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     const positive = (good / total) * 100;
//     return Math.round(positive) || 0;
//   }

//   render() {
//     const keys = Object.keys(this.state);
//     return (
//       <div>
//         <Section title={'Please, leave feedback'}>
//           <Feedback options={keys} onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>
//         <Section title={'Statistics'}>
//           {this.state.good || this.state.neutral || this.state.bad ? (
//             <Statistics
//               onGood={this.state.good}
//               onNeutral={this.state.neutral}
//               onBad={this.state.bad}
//               onTotal={this.countTotalFeedback()}
//               onPositive={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
