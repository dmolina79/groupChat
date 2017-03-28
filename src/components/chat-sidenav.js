import React, { Component } from 'react';

import ListGroup from './list-group';

export default class ChatSidenav extends Component {
  render() {
    const {
      name,
      channels,
      selectedChannel,
      groupies,

    } = this.props;


    return (
      <div className="sidenav">
        <div className="header h3 pt-3 px-4">{name}</div>
        <ListGroup
          className="list-group"
          group="Channels"
          list={channels}
          selectedItem={selectedChannel}
          selectable={true}
        />
        <ListGroup
          className="list-group"
          group="Groupies"
          list={groupies}
          selectedItem=""
          selectable={false}
        />
      </div>
    );
  }
}
