import React, { Component } from 'react';
import './DropDown.css';

class DropDown extends Component {
  state = {
    triger: true,
  };
  toggle = () => {
    this.setState(old => ({
      triger: !old.triger,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdow__toggle" onClick={this.toggle}>
          Показать
        </button>
        {this.state.triger && (
          <div className="Dropdow__menu">Випадаюче меню</div>
        )}
      </div>
    );
  }
}
export default DropDown;
