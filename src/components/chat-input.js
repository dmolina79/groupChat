import React, { Component } from 'react';

export default class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '' };
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

  textChangeHandler(event) {
    this.setState({ chatInput: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    const message = {
      username: this.props.user.email,
      message: this.state.chatInput
    };
    this.props.onSend(message);
    this.setState({ chatInput: '' });
  }

  render() {
    return (

      <form onSubmit={this.submitHandler}>
        <input
          type="text" className="form-control"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required
        />
        <button type="button" className="btn btn-primary" onClick={this.submitHandler} >Send</button>
      </form>

    );
  }
}
