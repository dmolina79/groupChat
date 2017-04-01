import React, { Component } from 'react';

import ChatMessages from './chat-messages';
import ChatInput from './chat-input';
import ChatUpNav from '../containers/chat-upnav';

export default class ChatFeed extends Component {
  render() {
    return (
      <div className="d-flex flex-column m-0 p-3 " id="chatFeed">
      <ChatUpNav />
        <ChatMessages messages={this.props.messages} />
        <ChatInput
          user={this.props.user}
          onSend={this.props.sendHandler}
        />
      </div>
    );
  }
}
