import React, { Component } from 'react';
import Chatter from './chatter';
import ChatSidenav from './chat-sidenav';

class ChatRoom extends Component {
  render() {
    return (
      <div>
        <ChatSidenav
          name="nena"
          channels={['poker', 'gaming', 'software']}
          groupies={['Douglas', 'Pamela', 'Alex', 'Gabriel']}
        />
        <Chatter />
      </div>
    );
  }
}
export default ChatRoom;
