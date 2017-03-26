import React, { Component } from 'react';

import Message from './message';

export default class ChatMessages extends Component {
  render() {
    const messages = this.props.messages.map((message, i) => {
      return (
        <Message
          key={i}
          username={message.username}
          message={message.message}
        />
      );
    });

    return (
      <div className="scroll">
        { messages }
      </div>
    );
  }
}
