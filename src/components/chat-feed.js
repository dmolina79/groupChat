import React, { Component } from 'react';

import ChatMessages from './chat-messages';
import ChatInput from './chat-input';

export default class ChatFeed extends Component {
  render() {
    return (
      <div>
        <h3>CHAT</h3>
        <ChatMessages messages={this.props.messages} />
        <ChatInput 
          user={this.props.user}
          onSend={this.props.sendHandler}
        />
      </div>
    );
  }
}
