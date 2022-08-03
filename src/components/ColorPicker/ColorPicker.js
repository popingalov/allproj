import React, { Component } from 'react';
import s from './colorPicker.module.css';
import classNames from 'classnames';

class ColorPicker extends Component {
  state = {
    activColorIdx: 0,
  };

  setActivIdx = idx => {
    this.setState({
      activColorIdx: idx,
    });
  };

  makeOptionClassName = idx => {
    // const optionsClass = [s.option];
    // if (idx === this.state.activColorIdx) {
    //   optionsClass.push(s.optionActiv);
    // }
    // return optionsClass;
    const test = idx === this.state.activColorIdx;
    return classNames(s.option, { [s.optionActiv]: test });
  };

  render() {
    const activColor = this.props.optionColor[this.state.activColorIdx].lable;
    return (
      <div className={s.container}>
        <h2 className={s.title}> Color Picker</h2>
        <p>Вибрали: {activColor}</p>
        <div>
          {this.props.optionColor.map(({ color }, idx) => {
            const className = this.makeOptionClassName(idx);

            return (
              <button
                onMouseDown={() => this.setActivIdx(idx)}
                key={color}
                style={{
                  backgroundColor: color,
                }}
                className={className}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
