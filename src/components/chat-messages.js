import React, { Component } from 'react';

import Message from './message';

export default class ChatMessages extends Component {
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const scrollHeight = this.messageList.scrollHeight;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  render() {
    const messages = this.props.messages.map((message, i) => {
      return (
        <Message
          key={i}
          username={message.username}
          message={message.message}
          time={message.dateTime}
          thumbnail={message.thumbnail}
        />
      );
    });

    return (
      <div
        className="messages"
        ref={(div) => {
          this.messageList = div;
        }}
      >
        {messages}
      </div>
    );
  }
}
