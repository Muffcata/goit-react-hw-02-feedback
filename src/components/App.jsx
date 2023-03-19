import React, { Component } from 'react';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { PropTypes } from 'prop-types';

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
    this.setState({
      positive: Math.round((this.good / this.total) * 100),
    });
  };

  render() {
    return (
      <div>
        <Section title="Expresso Coffee Caffe [Please leave feedback]">
          <FeedbackOptions
            onLeaveFeedback="Good"
            options={this.handleGoodIncrement}
          ></FeedbackOptions>
          <FeedbackOptions
            onLeaveFeedback="Neutral"
            options={this.handleNeutralIncrement}
          ></FeedbackOptions>
          <FeedbackOptions
            onLeaveFeedback="Bad"
            options={this.handleBadIncrement}
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
