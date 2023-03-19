import React, { Component } from 'react';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  handleGoodIncrement = () => {
    this.setState({ good: this.state.good + 1 });
  };
  handleNeutralIncrement = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  handleBadIncrement = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    this.setState({
      total: this.good + this.neutral + this.bad,
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => ({
      ...state,
      positive: Math.round((state.good / state.total) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, total, positive } = this.state;

    return (
      <div>
        <Section title="Expresso Coffee Caffe [Please leave feedback]">
          <FeedbackOptions
            onLeaveFeedback="good"
            options={this.handleGoodIncrement}
          ></FeedbackOptions>
          <FeedbackOptions
            onLeaveFeedback="neutral"
            options={this.handleNeutralIncrement}
          ></FeedbackOptions>
          <FeedbackOptions
            onLeaveFeedback="bad"
            options={this.handleBadIncrement}
          ></FeedbackOptions>
        </Section>
        {/* <button onClick={this.handleGoodIncrement}>Good</button>
        <button onClick={this.handleNeutralIncrement}>Neutral</button>
        <button onClick={this.handleBadIncrement}>Bad </button> */}
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positivePercentage={positive}
            />
          )}
        </Section>
      </div>
    );
  }
}
