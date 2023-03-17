import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleGoodIncrement(evt) {
    if (evt.target.textContent === 'Good') {
      this.setState({ good: this.state.good + 1 });
      console.log(evt);
    }
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.handleGoodIncrement}>
          Good
        </button>
        <button type="button">Neutral</button>
        <button type="button">Bad </button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    );
  }
}
