import React, { Component } from 'react';
import Chatter from './chatter';

class ChatRoom extends Component {
  render() {
    return (
      <div>


            <div className="panel panel-default" id="chatroom">
              <div className="panel-heading">
              <h1>Los Vatos Locos</h1>
              </div>
              <div className="panel-body">
                Channels
              </div>
            <div className="panel-channel">
            <ul className="list-group">
            <li className="list-group-item">Gaming</li>
            <li className="list-group-item">Poker</li>
            <li className="list-group-item">Programming</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">Movies</li>
      </ul>

            </div>
            <div className="panel-body">
            participants
            </div>
          <div className="panel-channel">
          <ul className="list-group">
      <li className="list-group-item">John</li>
      <li className="list-group-item">Tim</li>
      <li className="list-group-item">Charlie</li>
      <li className="list-group-item">Tom</li>
      </ul>

          </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Direct Messages</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>

            </div>
<Chatter />

      </div>
    );
  }
}
export default ChatRoom;
