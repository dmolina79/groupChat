import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ChatSidenav from '../components/chat-sidenav';
import ChatFeed from '../components/chat-feed';

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    this.sendHandler = this.sendHandler.bind(this);
  }

  componentWillMount() {
    this.props.fetchGroupChatInfo(this.props.params.group);
  }

  sendHandler(message) {
    const { name, selectedChannel } = this.props.groupChatInfo;
    const chatId = `${name}-${selectedChannel}`;
    this.props.postMessage(message, chatId);
  }

  renderLoadingMsg() {
    if (this.props.loading) {
      return <h1>LOADING CHATROOM...</h1>;
    }
  }

  render() {
    const { name, channels, selectedChannel } = this.props.groupChatInfo;
    const { messages } = this.props.chatInfo;
    const { user } = this.props;

    console.log('messages ', messages);
    return (

      <div id='chatRoomContainer'>
        {this.renderLoadingMsg()}
        <ChatSidenav
         selectedChannel={selectedChannel}
         name={name}
         channels={channels}
         groupies={['Douglas', 'Pamela', 'Alex', 'Gabriel']}
        />
        <ChatFeed
          user={user}
          messages={messages}
          sendHandler={this.sendHandler}
        />
        { /*<ChatterToolBar /> */ }
      </div>
    );
  }
}

const mapStateToProps = ({ auth, chatRoom, activeGroup }) => {
  const { loading, chatInfo } = chatRoom;
  const { groupChatInfo } = activeGroup;
  
  return {
    loading,
    groupChatInfo,
    chatInfo,
    user: auth.user };
};


export default connect(mapStateToProps, actions)(ChatRoom);
