import React from 'react'

import Buttons from '../buttons/buttons'
import Statistick from './statistick/statistick'
import Title from '../title/title'
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }
  countPositiveFeedbackPercentage = (total) =>
    total ? Math.round((this.state.good / total) * 100) : 0

  counter = (key) => {
    this.setState((state) => ({
      [key]: state[key] + 1,
    }))
    console.log(this.state)
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const feedback = this.countPositiveFeedbackPercentage(total)
    return (
      <Title title={'Залиште відгук'}>
        <Buttons value={this.counter} options={['good', 'neutral', 'bad']} />
        {total ? (
          <Statistick
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            feedback={feedback}
          />
        ) : (
          <h2>Немає статистики</h2>
        )}
      </Title>
    )
  }
}
export default Feedback
