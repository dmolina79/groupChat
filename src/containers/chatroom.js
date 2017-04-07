import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ChatSidenav from '../components/chat-sidenav';
import ChatFeed from '../components/chat-feed';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedChannel: 'default'
    }
    this.sendHandler = this.sendHandler.bind(this);
    this.submitCreateChannel = this.submitCreateChannel.bind(this);
  }

  componentWillMount() {
    console.log("Cargando Component : ", this.props.params.channel);
    this.props.fetchGroupChatInfo(this.props.params.group, this.props.params.channel);
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.selectedChannel !== nextProps.params.channel) {
      console.log("Cargando Next Props : ", nextProps);
      this.props.fetchGroupChatInfo(nextProps.params.group, nextProps.params.channel);
      this.setState({selectedChannel: nextProps.params.channel});
    }
  }

  sendHandler(message) {
    const { name } = this.props.groupChatInfo;
    const chatId = `${name}-${this.props.params.channel}`;
    this.props.postMessage(message, chatId);
  }

  submitCreateChannel(channel) {
    this.props.createChannel(this.props.groupChatInfo.name, channel);
    console.log('creating ', this.props.groupChatInfo.name, channel);
  }

  renderLoadingMsg() {
    if (this.props.loading) {
      return <h1>LOADING CHATROOM...</h1>;
    }
  }

  render() {
    const { name, channels } = this.props.groupChatInfo;
    const { messages } = this.props.chatInfo;
    const { user } = this.props;

    console.log('messages ', messages);
    return (
      <div className="container-fluid">
        {this.renderLoadingMsg()}
        <div className="row sidebar">
          <div className="col-sm-3 col-md-2 pl-0 chat-color">
            <ChatSidenav
              selectedChannel={this.props.params.channel}
              name={name}
              channels={channels}
              groupies={['Douglas', 'Pamela', 'Alex', 'Gabriel']}
              channelAction={this.submitCreateChannel}
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
