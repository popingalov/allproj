import React, { Component } from 'react';

class TodoEditor extends Component {
  state = { textArea: '' };
  handleChange = ev => {
    const { value } = ev.currentTarget;
    this.setState({
      textArea: value,
    });
  };
  reset = () => {
    this.setState({ textArea: '' });
  };

  submitText = e => {
    e.preventDefault();

    this.props.todoSub(this.state.textArea);
    this.reset();
  };

  render() {
    const { textArea } = this.state;
    const { handleChange, submitText } = this;
    return (
      <form onSubmit={submitText}>
        <textarea value={textArea} onChange={handleChange}></textarea>
        <button type="submit">Додати справу</button>
      </form>
    );
  }
}

export default TodoEditor;
