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
      <div className="container-fluid">
        {this.renderLoadingMsg()}
        <div className="row sidebar">
          <div className="col-sm-3 col-md-2 pl-0 chat-color">
            <ChatSidenav
              selectedChannel={selectedChannel}
              name={name}
              channels={channels}
              groupies={['Douglas', 'Pamela', 'Alex', 'Gabriel']}
            />
          </div>
          <div className="col-sm-9 col-md-10 p-0">
            <ChatFeed
              user={user}
              messages={messages}
              sendHandler={this.sendHandler}
            />
          </div>
          { /*<ChatterToolBar /> */}
        </div>
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
    user: auth.user
  };
};


export default connect(mapStateToProps, actions)(ChatRoom);
