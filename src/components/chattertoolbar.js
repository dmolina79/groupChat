
import React, { Component } from 'react';
import Chatter from './chatter';


class chatterToolBar extends Component {
  render() {
    return (
      <div>

<div className="col-md-9 current-chat">
<div className="row chat-toolbar-row">
    <div className="col-sm-12">
        <div className="btn-group chat-toolbar" role="group" aria-label="...">
            <button id="chat-leave" className="btn btn-default ticket-option" type="button">
              <i className="glyphicon glyphicon-remove-sign" /> Leave Chat
            </button>
            <button id="chat-invite" className="btn btn-default ticket-option" type="button">
              <i className="glyphicon glyphicon-plus" /> Invite
            </button>
            <button id="chat-customer" className="btn btn-default ticket-option" type="button">
              <i className="glyphicon glyphicon-user" /> Open Customer
            </button>
            <button id="chat-create-ticket" className="btn btn-default ticket-option" type="button">
              <i className="glyphicon glyphicon-pencil" />Create Ticket
            </button>
            <button id="chat-add-ticket" className="btn btn-default ticket-option" type="button">
              <i className="glyphicon glyphicon-plus" /> Add to Ticket
            </button>
            <button id="chat-open-ticket" className="btn btn-default ticket-option" type="button">
              <i className="glyphicon glyphicon-open" /> Open Ticket
            </button>
        </div>
    </div>
</div>
<Chatter />
</div>

      </div>
    );
  }
}

export default chatterToolBar;
