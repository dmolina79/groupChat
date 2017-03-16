import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ChatterToolBar from './chattertoolbar';

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

  componentWillMount() {
    this.props.fetchGroupChatInfo(this.props.params.group);
    console.log('user: ', this.props.user);
  }

  sendHandler(message) {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  renderLoadingMsg() {
    if (this.props.loading) {
      return <h1>LOADING CHATROOM...</h1>;
    }
  }

  render() {
    const { name, channels } = this.props.groupChatInfo;
    const { user } = this.props;

    return (

      <div className='chatRoomContainer'>
        {this.renderLoadingMsg()}

        <div>
          <ChatSidenav
           name={name}
           channels={channels}
           groupies={['Douglas', 'Pamela', 'Alex', 'Gabriel']}
          />
          <ChatFeed
            user={user}
            messages={this.state.messages}
            sendHandler={this.sendHandler}
          />

        </div>
        { /*<ChatterToolBar /> */ }
      </div>
    );
  }
}

const mapStateToProps = ({ auth, chatRoom }) => {
  const { loading, groupChatInfo } = chatRoom;
  return { loading, groupChatInfo, user: auth.user };
};


export default connect(mapStateToProps, actions)(ChatRoom);
