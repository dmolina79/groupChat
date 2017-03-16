import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ChatterToolBar from './chattertoolbar';
import ChatSidenav from './chat-sidenav';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    //bindings
  }

  componentWillMount() {
    this.props.fetchGroupChatInfo(this.props.params.group);
  }

  renderLoadingMsg() {
    if (this.props.loading) {
      return <h1>LOADING CHATROOM...</h1>;
    }
  }

  render() {
    const { name, channels } = this.props.groupChatInfo;
    const groupChatLabel = `Group Chat: ${name}`;
    return (


    <div>

        {this.renderLoadingMsg()}
        <ChatSidenav
          name={groupChatLabel}
          channels={channels}
          groupies={['Douglas', 'Pamela', 'Alex', 'Gabriel']}
        />

        { <ChatterToolBar /> }


      </div>
    );
  }
}

const mapStateToProps = ({ chatRoom }) => {
  const { loading, groupChatInfo } = chatRoom;
  return { loading, groupChatInfo };
};

export default connect(mapStateToProps, actions)(ChatRoom);
