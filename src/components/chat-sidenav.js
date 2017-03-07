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
        {name}
        <hr />
        <ListGroup
          group="Channels"
          list={channels}
          selectedItem={selectedChannel}
          selectable={true}
        />
        <hr />
        <ListGroup
          group="Groupies"
          list={groupies}
          selectedItem=""
          selectable={false}
        />
      </div>
    );
  }
}
