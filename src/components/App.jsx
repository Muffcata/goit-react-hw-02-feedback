import React, { Component } from 'react';

export class App extends Component {
  state = {
    positive: 0,
    neutral: 0,
    negative: 0,
  };
  handleGoodIncrement(evt) {
    if (evt.target.textContent === 'Good') {
      this.setState({ good: this.state.good + 1 });
    }
    console.log(evt);
  }

  render() {
    const { state } = this.props;

    return (
      <div>
        <span>Please leave feedback</span>
        <button type="button" onClick={this.handleGoodIncrement}>
          Good {state}
        </button>
        <button type="button">Neutral{state}</button>
        <button type="button">Bad {state}</button>
      </div>
    );
  }
}
