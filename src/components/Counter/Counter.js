import React from 'react';
import Controls from './Controls';
class Counter extends React.Component {
  static defaultProps = {
    initValue: 0,
  };
  state = { value: this.props.initValue };

  handlePlus = () => {
    this.setState(prevState => {
      return { value: (prevState.value += 1) };
    });
  };
  handleMinus = () => {
    this.setState(prevState => {
      return { value: (prevState.value -= 1) };
    });
  };
  render() {
    return (
      <div className="Couner">
        <span className="Counter__value">{this.state.value}</span>
        <Controls onMinus={this.handleMinus} onPlus={this.handlePlus} />
      </div>
    );
  }
}

export default Counter;
