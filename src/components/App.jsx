import React, { Component } from 'react';

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
      total: this.state.good + this.state.neutral + this.state.bad,
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(state => ({
      positive: Math.round((state.good / state.total) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, total, positive } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={this.handleGoodIncrement}>Good</button>
        <button onClick={this.handleNeutralIncrement}>Neutral</button>
        <button onClick={this.handleBadIncrement}>Bad </button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback:{positive}</p>
      </div>
    );
  }
}