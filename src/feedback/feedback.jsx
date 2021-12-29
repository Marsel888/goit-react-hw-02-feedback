import React from 'react'
import { Children } from 'react/cjs/react.production.min'
import Buttons from './buttons/buttons'
import Statistick from './statistick/statistick'
import Section from '../title/title'
class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }
  countPositiveFeedbackPercentage = (total) =>
    total ? Math.round((this.state.good / total) * 100) : 0

  value = (key) => {
    this.setState((state) => ({
      [key]: state[key] + 1,
    }))
    console.log(this.state)
  }

  render() {
    const total = this.countTotalFeedback()
    const feedback = this.countPositiveFeedbackPercentage(total)
    return (
      <Section title={'Залиште відгук'}>
        <Buttons value={this.value} options={['good', 'neutral', 'bad']} />
        {total ? (
          <Statistick
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            feedback={feedback}
          />
        ) : (
          <h2>Немає статистики</h2>
        )}
      </Section>
    )
  }
}
export default Counter
