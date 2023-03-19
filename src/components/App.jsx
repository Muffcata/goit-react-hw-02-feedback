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
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  handleNeutralIncrement = () => {
    this.setState({ neutral: this.state.neutral + 1 });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  handleBadIncrement = () => {
    this.setState({ bad: this.state.bad + 1 });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState({
      total: this.state.good + this.state.neutral + this.state.bad,
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState({
      positive: Math.round((this.state.good / this.state.total) * 100),
    });
  };

  render() {
    return (
      <div>
        <Section title="Expresso Coffee Caffe [Please leave feedback]">
          <FeedbackOptions
            onLeaveFeedback={this.handleGoodIncrement}
            options="Good"
          ></FeedbackOptions>
          <FeedbackOptions
            onLeaveFeedback={this.handleNeutralIncrement}
            options="Neutral"
          ></FeedbackOptions>
          <FeedbackOptions
            onLeaveFeedback={this.handleBadIncrement}
            options="Bad"
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.state.total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positive}
            />
          )}
        </Section>
      </div>
    );
  }
}
