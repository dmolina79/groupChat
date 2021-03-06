import React, { Component } from 'react';

import ListGroup from './list-group';

export default class ChatSidenav extends Component {
  render() {
    const {
      name,
      channels,
      selectedChannel,
      groupies,
      channelAction,
      groupieAction
    } = this.props;


    return (
      <div className="sidenav">
        <div className="header h3 pt-3 px-4">{name}</div>
        <ListGroup
          className="list-group"
          group="Channels"
          list={channels}
          selectable={true}
          selectedItem={selectedChannel}
          prefixRoute={`/chatroom/${name}`}
          itemName="Channel"
          modalAction={channelAction}
        />
        <ListGroup
          className="list-group"
          group="Groupies"
          list={groupies}
          selectable={false}
          selectedItem=""
          prefixRoute={`/chatroom/${name}`}
          itemName="Groupie"
          modalAction={groupieAction}
        />
      </div>
    );
  }
}
