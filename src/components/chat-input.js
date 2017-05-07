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
      username: this.props.user.displayName,
      message: this.state.chatInput
    };
    this.props.onSend(message);
    this.setState({ chatInput: '' });
  }

  render() {
    return (
      <nav classClass="navbar navbar-light bg-faded">

        <form id="input" onSubmit={this.submitHandler}>

          <div className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button" onClick={this.submitHandler}>+</button>
            </span>
            <input
              type="text"
              className="form-control"
              onChange={this.textChangeHandler}
              value={this.state.chatInput}
              placeholder="Write a message..."
              required
            />
            <span className="input-group-addon">☺</span>
          </div>

        </form>
      </nav>

    );
  }
}
