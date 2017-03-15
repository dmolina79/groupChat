import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Chatter from './chatter';
import ChatSidenav from './chat-sidenav';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    //bindings
  }

  componentWillMount() {
    this.props.fetchGroupChat(this.props.params.group);
  }

  renderLoadingMsg() {
    if (this.props.loading) {
      return <h1>LOADING CHATROOM...</h1>;
    }
  }

  render() {
    const { name, channels } = this.props.chatGroupInfo;
    const groupChatLabel = `Group Chat: ${name}`;
    return (
      <div>
        {this.renderLoadingMsg()}
        <ChatSidenav
          name={groupChatLabel}
          channels={channels}
          groupies={['Douglas', 'Pamela', 'Alex', 'Gabriel']}
        />
        { /*<Chatter /> */ }
      </div>
    );
  }
}

const mapStateToProps = ({ chatRoom }) => {
  const { loading, chatGroupInfo } = chatRoom;
  return { loading, chatGroupInfo };
};

export default connect(mapStateToProps, actions)(ChatRoom);
