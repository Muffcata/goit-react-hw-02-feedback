import { Component } from 'React';

export class Button extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  state = {};
  handleIncrement = evt => {
    console.log('Inc button was clicked', evt);
  };

  render() {
    const { step } = this.props;
    return (
      <>
        <button type="button" onClick={this.handleIncrement}>
          Good{step}
        </button>
        <button type="button" onClick={this.handleIncrement}>
          Neutral{step}
        </button>
        <button type="button" onClick={this.handleIncrement}>
          Bad{step}
        </button>
      </>
    );
  }
}

export default Button;
