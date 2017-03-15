import React, { Component } from 'react';
import ChatSidenav from './chat-sidenav';
import ChatFeed from './chat-feed';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{ username: 'Gabriel', message: 'hola' },
                 { username: 'Douglas', message: 'q ondas' }]
    };

    this.sendHandler = this.sendHandler.bind(this);
  }

  sendHandler(message) {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div>
        <ChatSidenav
         name="los vatos locos"
         channels={['poker', 'gaming', 'software']}
         groupies={['Douglas', 'Pamela', 'Alex', 'Gabriel']}
        />
        <ChatFeed
          messages={this.state.messages}
          sendHandler={this.sendHandler}
        />
      </div>
    );
  }
}
export default ChatRoom;
