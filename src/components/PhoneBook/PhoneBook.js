import React, { Component } from 'react';

class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  change = ev => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.submitPhone(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const { change, submitForm } = this;
    return (
      <div>
        <h3>PhoneBook</h3>
        <form onSubmit={submitForm}>
          <input
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            name="name"
            value={name}
            required
            onChange={change}
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={change}
            required
          />
          <button type="submit">Додати</button>
        </form>
      </div>
    );
  }
}

export default PhoneBook;
