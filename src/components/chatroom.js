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
    this.props.fetchGroupChat('nena');
  }

  renderLoadingMsg() {
    if (this.props.loading) {
      return <h1>LOADING CHATROOM...</h1>;
    }
  }

  render() {
    return (
      <div>
        {this.renderLoadingMsg()}
        <ChatSidenav
          name="Mi grupo de chat"
          channels={['default']}
          groupies={['Douglas', 'Pamela', 'Alex', 'Gabriel']}
        />
        { /*<Chatter /> */ }
      </div>
    );
  }
}

const mapStateToProps = ({ chatRoom }) => {
  const { loading } = chatRoom;
  return { loading };
};

export default connect(mapStateToProps, actions)(ChatRoom);
