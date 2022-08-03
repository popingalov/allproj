import React, { Component } from 'react';
import shortid from 'shortid';
//
class Form extends Component {
  state = { name: '', tag: '', experience: 'junior', licence: false };

  randomId = shortid.generate();

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { formSubmit } = this.props;
    formSubmit(this.state);
    this.reset();
  };

  box = e => {
    const { checked } = e.currentTarget;
    this.setState({ licence: checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '', experience: 'junior', licence: false });
  };

  render() {
    const { name, tag, experience, licence } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.randomId}>
          Имя{' '}
          <input
            id={this.randomId}
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прізвисько{' '}
          <input
            type="text"
            value={tag}
            name="tag"
            onChange={this.handleChange}
          />
        </label>
        <p>ваш Уровень</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={experience === 'junior'}
            onChange={this.handleChange}
          />
          junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={experience === 'middle'}
            onChange={this.handleChange}
          />
          middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={experience === 'senior'}
            onChange={this.handleChange}
          />
          senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={licence}
            onChange={this.box}
          />
          Согласен
        </label>
        <br />

        <button type="submit">Понеслась</button>
      </form>
    );
  }
}
export default Form;
